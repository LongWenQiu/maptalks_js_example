(function () {
  /**
 * 地图（天地图）配置文件
 */
  var mapOptions = {
    zoom: 14,
    minZoom: 2,
    maxZoom: 20,
    center: [113.1206, 23.0228],
    attribution: false,
    spatialReference: {
      projection: 'EPSG:4326'
    },
    zoomControl: {
      position: {
        bottom: 70,
        left: 10
      },
      slider: false,
      zoomLevel: false
    },
    scaleControl: {
      position: {
        bottom: 40,
        left: 10
      },
      maxWidth: 50,
      metric: true,
      imperial: false
    }
  }
  var baseLayers = [
    {
      id: 'vec_c',
      layerType: 'TileLayer',
      tileSystem: [1, -1, -180, 90],
      urlTemplate: 'http://t{s}.tianditu.gov.cn/DataServer?T=vec_c&tk=4f62e1d82bd46e2ff470b291c2260156&x={x}&y={y}&l={z}',
      // urlTemplate: 'http://172.18.7.60/proxy/proxy/mapTiledProxy.ashx?http://t{s}.tianditu.gov.cn/DataServer?T=vec_c&tk=4f62e1d82bd46e2ff470b291c2260156&x={x}&y={y}&l={z}',
      subdomains: ['1', '2', '3', '4', '5'],
      visible: true,
      crossOrigin: 'anonymous'
    },
    {
      id: 'cva_c',
      layerType: 'TileLayer',
      tileSystem: [1, -1, -180, 90],
      urlTemplate: 'http://t{s}.tianditu.gov.cn/DataServer?T=cva_c&tk=4f62e1d82bd46e2ff470b291c2260156&x={x}&y={y}&l={z}',
      // urlTemplate: 'http://172.18.7.60/proxy/proxy/mapTiledProxy.ashx?http://t{s}.tianditu.gov.cn/DataServer?T=cva_c&tk=4f62e1d82bd46e2ff470b291c2260156&x={x}&y={y}&l={z}',
      subdomains: ['1', '2', '3', '4', '5'],
      visible: true,
      crossOrigin: 'anonymous'
    },
    {
      id: 'img_c',
      layerType: 'TileLayer',
      tileSystem: [1, -1, -180, 90],
      urlTemplate: 'http://t{s}.tianditu.gov.cn/DataServer?T=img_c&tk=4f62e1d82bd46e2ff470b291c2260156&x={x}&y={y}&l={z}',
      subdomains: ['1', '2', '3', '4', '5'],
      visible: false,
      crossOrigin: 'anonymous'
    },
    {
      id: 'cia_c',
      layerType: 'TileLayer',
      tileSystem: [1, -1, -180, 90],
      urlTemplate: 'http://t{s}.tianditu.gov.cn/DataServer?T=cia_c&tk=4f62e1d82bd46e2ff470b291c2260156&x={x}&y={y}&l={z}',
      subdomains: ['1', '2', '3', '4', '5'],
      visible: false,
      crossOrigin: 'anonymous'
    },
    {
      id: 'ter_c',
      layerType: 'TileLayer',
      tileSystem: [1, -1, -180, 90],
      urlTemplate: 'http://t{s}.tianditu.gov.cn/DataServer?T=ter_c&tk=4f62e1d82bd46e2ff470b291c2260156&x={x}&y={y}&l={z}',
      subdomains: ['1', '2', '3', '4', '5'],
      visible: false,
      crossOrigin: 'anonymous'
    },
    {
      id: 'cta_c',
      layerType: 'TileLayer',
      tileSystem: [1, -1, -180, 90],
      urlTemplate: 'http://t{s}.tianditu.gov.cn/DataServer?T=cta_c&tk=4f62e1d82bd46e2ff470b291c2260156&x={x}&y={y}&l={z}',
      subdomains: ['1', '2', '3', '4', '5'],
      visible: false,
      crossOrigin: 'anonymous'
    }
  ]

  // ----------------------通用部分----------------------------
  var layers = [
    {
      id: 'label_layer',
      layerType: 'VectorLayer'
    },
    {
      id: 'plot_layer',
      layerType: 'VectorLayer'
    },
    {
      id: 'buffer_layer',
      layerType: 'VectorLayer'
    },
    {
      id: 'point_layer',
      layerType: 'VectorLayer'
    }
  ]
  var services = {
    baseServiceUrl: '',
    token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzeWpnbGoiLCJleHAiOjE1Nzg2NDYxNTQsImlhdCI6MTU3ODYyMTA3MX0.Vh9zqUHw1cdznQkHOhnjWFFrS-9LbAa_ohAQM53n7kA'
  }

  return {
    mapOptions: mapOptions,
    baseLayers: baseLayers,
    layers: layers,
    services: services
  }
})()
