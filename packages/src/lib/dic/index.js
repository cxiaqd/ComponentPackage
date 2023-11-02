//空白数据的占位符
const PLACEHOLDER = '--';
//时期格式
const FORMAT_DATETIME = 'YYYY-MM-DD HH:mm:ss';
const FORMAT_DATETIMECLOSE = 'YYYYMMDDHHmmss';
const FORMAT_DATE = 'YYYY-MM-DD';
const FORMAT_DATE_ZH_CN = 'YYYY年MM月DD日';
const FORMAT_MONTH = 'YYYY-MM';
const FORMAT_TIME = 'HH:mm:ss';
const FORMAT_HHMM = 'HH:mm';
const FORMAT_DATETIME_GCF = 'yyyy-MM-dd HH:mm:ss';
const FORMAT_DATE_GCF = 'yyyy-MM-dd';
const FORMAT_MONTH_GCF = 'yyyy-MM';
//表单校验规则
const RULE_REQUIRED = { required: true, message: '此项为必填项' };
const RULE_MUSTSELECT = { required: true, message: '请选择一项' };
const RULE_REQUIRED_DATERANGE = (rule, value, callback) => { (value && value[0] && value[1]) ? callback() : callback(new Error('此项为必填项'))};
const RULE_NOTSUPPORTED = { pattern: /^[^`~!@#$%^&*()\-=_+]+$/, message: '不支持的字符:`~!@#$%^&*()-=_+' };
const RULE_NOTCHINESE = { pattern: /^[^\u4e00-\u9fa5]+$/, message: '不能输入中文' };
const RULE_LT6LETTERS = { max: 6, message: '最多不超过6个字' };
const RULE_LT8LETTERS = { max: 8, message: '最多不超过8个字' };
const RULE_LT10LETTERS = { max: 10, message: '最多不超过10个字' };
const RULE_LT12LETTERS = { max: 12, message: '最多不超过12个字' };
const RULE_LT18LETTERS = { max: 18, message: '最多不超过18个字' };
const RULE_LT32LETTERS = { max: 32, message: '最多不超过32个字' };
const RULE_LT64LETTERS = { max: 64, message: '最多不超过64个字' };
const RULE_EQ20LETTERS = { len: 20, message: '请输入20个字' };
const RULE_URL = { type: 'url', message: '请填写url格式' };
const RULE_NUMBER = { pattern: /^\d+$/, message: '请填写数字' };
const RULE_INCORRECTIDCARD = { pattern: /(^\d{15}$)|(^\d{17}(\d|X|x)$)/, message: '身份证格式错误' };
const RULE_IDCARDNUMBER = {pattern: /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/, message:'身份证格式错误' };
const RULE_INCORRECTIP = { message: 'IP格式错误', pattern: /^\d{1,3}\.(\d{1,3}){3}$/};
const RULE_INCORRECTLONGITUDE = { message: '请输入-180.0~+180.0的数字,最多支持7位小数', pattern: /^[\-\+]?(\d{1,2}|1[0-7]?\d{1}|180|\d{1,2}\.\d{0,7}|1[0-7]?\d{1}\.\d{0,7}|180\.0{0,7})$/ };
const RULE_INCORRECTLATITUDE = { message: '请输入-90.0~+90.0的数字,最多支持7位小数', pattern: /^[\-\+]?([0-8]?\d{1}|90|[0-8]?\d{1}\.\d{0,7}|90\.0{0,7})$/ };


export {
	PLACEHOLDER,
	FORMAT_DATETIME,
	FORMAT_DATETIMECLOSE,
	FORMAT_DATE,
	FORMAT_DATE_ZH_CN,
	FORMAT_TIME,
	FORMAT_MONTH,
	FORMAT_HHMM,
	FORMAT_DATETIME_GCF,
	FORMAT_DATE_GCF,
	FORMAT_MONTH_GCF,
	RULE_REQUIRED,
	RULE_REQUIRED_DATERANGE,
	RULE_MUSTSELECT,
	RULE_NOTSUPPORTED,
	RULE_NOTCHINESE,
	RULE_LT6LETTERS,
	RULE_LT8LETTERS,
	RULE_LT10LETTERS,
	RULE_LT12LETTERS,
	RULE_LT18LETTERS,
	RULE_LT32LETTERS,
	RULE_LT64LETTERS,
	RULE_EQ20LETTERS,
	RULE_URL,
	RULE_NUMBER,
	RULE_INCORRECTIDCARD,
	RULE_IDCARDNUMBER,
	RULE_INCORRECTIP,
	RULE_INCORRECTLONGITUDE,
	RULE_INCORRECTLATITUDE,
}