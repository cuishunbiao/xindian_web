//小于10补0
const parseIntNum = (num: Number) => {
	return num.toString().padStart(2, '0')
}

const YEARNUM = ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030'] //写周报
var MONTHNUM = [] //写周报
for (var i = 1; i < 13; i++) {
	MONTHNUM.push(parseIntNum(i))
}
var DAYNUM = []
for (var j = 1; j < 32; j++) {
	DAYNUM.push(parseIntNum(j))
}
var HOUR = []
for (var h = 0; h < 24; h++) {
	HOUR.push(parseIntNum(h))
}
var MINUTER = []
for (var m = 0; m < 60; m++) {
	MINUTER.push(parseIntNum(m))
}

export { YEARNUM, MONTHNUM, DAYNUM, HOUR, MINUTER }
