import moment from 'moment'
import Vue from 'vue'

const getDayDifferences = (options) => {
  const past = moment(options.past).isValid()
    ? moment(options.past).valueOf('x')
    : options.past
  const now = Date.now() / 1000
  const diff = now - past
  if (parseInt(options.past, 10) > 10) {
    let ret = Math.floor(diff / 86400)
    let unit = ''
    if (diff < 60) {
      ret = parseInt(diff, 10)
      unit = ' second'
    } else if (diff < 3600) {
      ret = parseInt(diff / 60, 10)
      unit = ' minute'
    } else if (diff < 86400) {
      ret = parseInt(diff / 3600, 10)
      unit = ' hour'
    } else if (diff < 2592000) {
      ret = parseInt(diff / 86400, 10)
      unit = ' day'
    } else if (diff < 31104000) {
      ret = parseInt(diff / 2592000, 10)
      unit = ' month'
    } else {
      ret = parseInt(diff / 31104000, 10)
      unit = ' year'
    }
    unit += ret > 1 ? 's' : ''
    return ret + unit
  }
  return undefined
}

// global filters
// Vue.filter('getTime', (time) => getTime({ time }) || '-')

Vue.filter('dayDifference', (age) => getDayDifferences({ past: age }))
