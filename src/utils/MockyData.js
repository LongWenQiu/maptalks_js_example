export default {
  mocky_Point (center, count) {
    const x = center[0]
    const y = center[1]
    const extent = this.creatExetent(x, y)
    var arr = []
    var template = {
      'clientaddress': '武汉市', //  地址
      'clientperson': '李四', //  联系人
      'clienttel': '13600112233' //  联系人电话
    }
    var nameArr = ['坐标']
    var name = nameArr[0]
    for (var i = 0; i < count; i++) {
      const obj = Object.assign({}, template)
      obj.clientname = name + i
      obj.id = i
      obj.clientid = 'termimal' + i
      obj.clientaddress = obj.clientaddress + i
      obj.clientstatus = parseInt(Math.random() * 10 % 2)
      obj.longitude = this.randomXY(extent.xmin, extent.xmax)
      obj.latitude = this.randomXY(extent.ymin, extent.ymax)
      obj.clientstyle = 0
      arr.push(obj)
    }
    return arr
  },
  randomXY (min, max) {
    return Math.random() * (max - min + 1) + min
  },
  creatExetent (x, y) {
    const xBuffer = 4
    const yBuffer = 4
    const xmin = x - Math.random() * xBuffer
    const ymin = y - Math.random() * yBuffer
    const xmax = x + Math.random() * xBuffer
    const ymax = y + Math.random() * yBuffer
    return {xmin, ymin, xmax, ymax}
  }
}
