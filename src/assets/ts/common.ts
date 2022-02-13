//小于10补0
const parseIntNum = (num: Number) => {
	return num.toString().padStart(2, '0')
}

const YEARNUM = ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030'] //写周报
let MONTHNUM: String[] = [] //写周报
for (var i = 1; i < 13; i++) {
	MONTHNUM.push(parseIntNum(i))
}
var DAYNUM: String[] = []
for (var j = 1; j < 32; j++) {
	DAYNUM.push(parseIntNum(j))
}
var HOUR: String[] = []
for (var h = 0; h < 24; h++) {
	HOUR.push(parseIntNum(h))
}
var MINUTER: String[] = []
for (var m = 0; m < 60; m++) {
	MINUTER.push(parseIntNum(m))
}

const errorFn = (text: string) => {
	if (document.getElementById('error-container')) return
	const dom = document.createElement('div')
	dom.className = 'error-container'
	dom.id = 'error-container'
	const domcon = document.createElement('div')
	domcon.className = 'error-content'
	domcon.id = 'error-content'
	const domspan = document.createElement('span')
	domspan.innerHTML = text
	domcon.appendChild(domspan)
	dom.appendChild(domcon)
	document.body.appendChild(dom)
	setTimeout(() => {
		const errorDom: any = document.getElementById('error-container')
		document.body.removeChild(errorDom)
	}, 1800)
}

export { YEARNUM, MONTHNUM, DAYNUM, HOUR, MINUTER, errorFn }
