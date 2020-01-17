export default {
  CreatPoint (origin, count) {
    const x = origin[0]
    const y = origin[1]
    var arr = []
    var template = {
      'clientaddress': '武汉市', //  地址
      'clientperson': '李四', //  联系人
      'clienttel': '13600112233' //  联系人电话
    }
    const xBuffer = 30
    const yBuffer = 20
    var nameArr = ['坐标']
    var name = nameArr[0]
    for (var i = 0; i < count; i++) {
      const obj = Object.assign({}, template)
      const n = i % 2 === 0 ? 1 : -1
      obj.clientname = name + i
      obj.id = i
      obj.clientid = 'termimal' + i
      obj.clientaddress = obj.clientaddress + i
      obj.clientstatus = parseInt(Math.random() * 10 % 2)
      obj.longitude = x + Math.random() * n * xBuffer
      obj.latitude = y + Math.random() * n * yBuffer
      obj.clientstyle = 0
      arr.push(obj)
    }
    return arr
  }
}
