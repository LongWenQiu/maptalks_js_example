/**
 * @name:
 * @param : undefined
 * @return : undefined
 */
export default {
  assert (condition, msg) {
    if (!condition) {
      throw new Error(`[GIS] ${msg}`)
    }
  },
  mixin (source, target) {
    for (var prop in source) {
      if (source.hasOwnProperty(prop)) {
        target[prop] = source[prop]
      }
    }
  },
  uuid (len = 32, radix = 16) {
    let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
    let uuid = []
    radix = radix || chars.length
    if (len) {
      for (let i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random() * radix)]
    } else {
      let r
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
      uuid[14] = '4'
      for (let i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | (Math.random() * 16)
          uuid[i] = chars[i === 19 ? (r & 0x3) | 0x8 : r]
        }
      }
    }
    return uuid.join('')
  },
  meter2degree (meter) {
    return meter * 0.001 * 0.0089932202929999989
  },
  degree2meter (degree) {
    return degree * 1000 / 0.0089932202929999989
  },
  trim (str) {
    return ('' + str).replace(/(^[\s\n\t]+|[\s\n\t]+$)/g, '')
  },
  isType (obj, name) {
    // name: 'String', 'Object', 'Number', 'Array','Undefined', 'Function', 'Null', 'Symbol'
    return Object.prototype.toString.call(obj) === '[object ' + name + ']'
  }
}
