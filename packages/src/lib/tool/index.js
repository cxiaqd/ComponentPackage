import numeral from 'numeral';
import { PLACEHOLDER } from '@/lib/dic';
import moment from "moment";

function float2Percent(float) {
	float = Number(float)
	return isNaN(float) ? '--' : numeral(float).format('0.[00]%')
}

function formatNumber(number) {
	if(number === null || typeof number === 'undefined') {
		return PLACEHOLDER
	}
	return numeral(number).format('0,0')
}

function formatNumber2(number) {
  if(number === null || typeof number === 'undefined') {
    return PLACEHOLDER
  }
  if(Math.abs(number) >= 1e8) return numeral(number/1e8).format("0.[0]")+'亿'
  if(Math.abs(number) >= 1e4) return numeral(number/1e4).format("0.[0]")+'万'
  return numeral(number).format('0,0')
}

function goToApp(args) {
	var { title, url, param = '' } = args;

	let iot = false
	try	{
		//防止跨域时报错
		iot = top.window.goToApp
	} catch(e) {
		iot = false
	}

	if(!iot) {
		return window.open(url+param);
	}

	// 门户新开页top.window.goToApp()
	const { protocol, hostname, port } = location
	let prefix = `${protocol}//${hostname}`
	if(port) {
		prefix += `:${port}`
	}
	url = url.substring(1)//去斜杠

	top.window.goToApp(
		{
			name: title,
			url: `${prefix}/${url}`,
			param,
			callback: { func: '', param: {} },
			reload: true,
		}
	);
}

function echartsOnLegendSelectChange({ selected, name }) {
	let hasTrue = false
	for(let key in selected) {
	if(selected[key]) {
		hasTrue = true
	}
	}
	if(!hasTrue) {
	this.setOption({ legend: { selected: { [name]: true } } })
	}
}

// 时间戳转为毫秒-SSS / 秒-ss
function stampToSSS(date) {
  return moment(date).format("YYYY-MM-DD HH:mm:ss.SSS"); 
}
function stampToss(date) {
  return moment(date).format("YYYY-MM-DD HH:mm:ss"); 
}

export { float2Percent, formatNumber, formatNumber2, goToApp, echartsOnLegendSelectChange, stampToSSS, stampToss };
