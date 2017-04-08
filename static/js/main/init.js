// var center = ol.proj.transform([104.06667, 30.66667], 'EPSG:4326', 'EPSG:3857');
// var center = [20100000, 20001000];
// 这个坐标位置是 EPSG:3857 的坐标

// 图片要放大，才能显示得看得见
var imgSize = [46000, 32914]
// 切出来 16 层
// imgSize = [44957, 139277]
// 切出来 18 层
var tierSize;
var tierSizeCalcule = function() {
  let [width, height] = imgSize
  let maxSize = Math.max(width, height)
  console.log('maxSize', maxSize);
  let i = 0
  // let r = Math.pow(2, i)
  while (maxSize > Math.pow(2, i)) {
    i++
  }
  console.log('tierSize i', i);
  tierSize = i
  let resolution_max = Math.pow(2,i)
  console.log('resolution_max', resolution_max);
}

tierSizeCalcule()
console.log('tierSize', tierSize);

// var imgSize = [36832*250, 38432*250]
console.log('imgSize', imgSize);

// 确定中心
var center = [imgSize[0]/2, -imgSize[1]/2]
console.log('center', center);
// 确定边界
var extent = [0, -imgSize[1], imgSize[0], 0];

var zoom = 27 - tierSize
// 这样计算得到的 zoom 会加载第 10 层

//创建地图
var map = new ol.Map({
    // interactions: ol.interaction.defaults().extend([new app.Drag()]),
    controls: ol.control.defaults().extend([
              // new ol.control.FullScreen(),
              new ol.control.MousePosition(),
              // new ol.control.OverviewMap(),
              // new ol.control.ScaleLine(),
              new ol.control.ZoomSlider(),
              // new ol.control.ZoomToExtent()
          ]),
    view: new ol.View({
        center: center,
        extent: extent,
        zoom: zoom+1,
        minZoom: zoom,
        maxZoom: 17
    }),
    target: 'map'
});


// map.getView().fit(extent);
// 资源加载的时候，要调 imgSize
imgSize[0] *= 250
imgSize[1] *= 250
// 添加一个使用离线瓦片地图的层
var offlineMapLayer = new ol.layer.Tile({
    source: new ol.source.Zoomify({
      size: imgSize,
      // tierSizeCalculation: 'truncated',
      // 设置本地离线瓦片所在路径，由于例子里面只有一张瓦片，页面显示时就只看得到一张瓦片。
      url: 'images/c/CMU-1_files/{z}/{x}_{y}.jpeg',
      // url: 'images/c/Leica-2_files/{z}/{x}_{y}.jpeg',
      // 注意 ol-debug.js 的源码需要修改，注释掉 ol-debug.js 的第 77179 那几行关于 URL 自动补全的那几行
    })
});

map.addLayer(offlineMapLayer);


// url: 'images/CMU-1_files/{z}/{x}_{y}.jpeg',
var e = function(s) {
  return document.querySelector(s)
}
