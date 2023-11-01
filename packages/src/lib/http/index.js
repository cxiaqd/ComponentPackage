import axios from 'axios';
import loading from 'hrc-loading';

import storage from './storage';
import _Error, { showError } from '@/lib/error';

var config = require('__dirname/config')
var requestRoot = config.build.requestRoot;
if(process.env.NODE_ENV === 'development') {
	requestRoot = config.requestRoot;
}

var token = document.getElementsByName("_csrf")[0].getAttribute("content");
var header = document.getElementsByName("_csrf_header")[0].getAttribute("content");
axios.defaults.baseURL = requestRoot;
axios.defaults.headers.common[header] = token;
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';

var http = {};


['get', 'post'].forEach(method => {
	http[method] = (...args) => axios[method](...args).then(response => {
		if (response) {
			var { status, data } = response
			if (status && status == 200 && data) {
				if(data.code == 0) {
					return data
				} else {
					throw new _Error(data);
				}
			} else {
				throw new _Error(data);
			}
		} else {
			throw new _Error('接口没有返回值');
		}
	}).catch(e => {
		var response = e.response;
		if(response) {
			var status = response.status
			if(status === 401 || status === 403) {
				throw process.env.NODE_ENV === 'production' ? redirect() : new _Error('您没有权限进行此项操作')
			} else if(status === 404) {
				throw new _Error('网络异常')
			}
			if('data' in response) {
				throw new _Error(response.data)
			} else if('statusText' in response) {
				throw new _Error(response.statusText)
			}
		} else if (e.message === 'Network Error') {
			throw new _Error('网络异常')
		}
		throw e;
	})
})

http.ajaxSubmit = (form, options) => new Promise((resolve, reject) => {
		if(!('data' in options)) {
			options.data = {}
		}
		options.data._csrf = token

		Promise.all([
			import(/* webpackChunkName: "jquery" */ 'jquery'),
			import(/* webpackChunkName: "jquery-form" */ 'jquery-form'),
		])
		.then(([ $ ]) => $.default)
		.then($ => $(form).ajaxSubmit({
				...options,
				url: requestRoot + options.url,
				dataType: 'json',
				headers: {
					[header]: token,
					'X-Requested-With': 'XMLHttpRequest',
					...options.headers,
				},
				success: data => {
					if(data.code == 0) {
						resolve(data)
					} else {
						reject(new _Error(data))
					}
				},
				error: ({ responseJSON, statusText, status }) => {
					if(statusText === 'n/a') {
						//'n/a'是IE8的情况下返回的
						reject(process.env.NODE_ENV === 'production' ? redirect() : new _Error('网络异常或您没有权限进行此项操作'))
					} else if(statusText === 'error') {
						reject(new _Error('网络异常'))
					}
					if(status === 401 || status === 403) {
						reject(process.env.NODE_ENV === 'production' ? redirect() : new _Error('您没有权限进行此项操作'))
					} else if(status === 404) {
						reject(new _Error('网络异常'))
					}
					if(responseJSON) {
						reject(new _Error(responseJSON))
					}
					reject(new _Error(statusText))
				}
			})
		)
	})

http.storage = storage;
http.loading = loading;
http.showError = showError;

export default http;

function redirect() {
	location.reload()
	return new _Error('redirect');
}