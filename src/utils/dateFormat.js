export default function (time) {
  if (!time) return ''
  let date = new Date(time)
  let year = date.getFullYear()
  let month = toFixed(date.getMonth() + 1)
  let days = toFixed(date.getDay())
  let hour = toFixed(date.getHours())
  let min = toFixed(date.getMinutes())
  let second = toFixed(date.getSeconds())


  return `${year}-${month}-${days}  ${hour}:${min}:${second}`


}

function toFixed(value) {
  if (value < 10) return '0' + value
  return value
}