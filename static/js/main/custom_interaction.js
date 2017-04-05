var pointFeature = new ol.Feature(new ol.geom.Point([36467.43255275112,-19534.11226989936]));

// var lineFeature = new ol.Feature(
//     new ol.geom.LineString([[-1e7, 1e6], [-1e6, 3e6]]));
//
// var polygonFeature = new ol.Feature(
//     new ol.geom.Polygon([[[-3e6, -1e6], [-3e6, 1e6],
//         [-1e6, 1e6], [-1e6, -1e6], [-3e6, -1e6]]]));
//

// ******************************************************

var layer2 = new ol.layer.Vector({
  source: new ol.source.Vector({
    // features: [pointFeature, lineFeature, polygonFeature]
    features: [pointFeature]
  }),
  style: new ol.style.Style({
    image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
      anchor: [0.5, 46],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      opacity: 0.95,
      src: 'https://openlayers.org/en/v4.0.1/examples/data/icon.png'
    })),
    stroke: new ol.style.Stroke({
      width: 3,
      color: [255, 0, 0, 1]
      // 红色
    }),
    fill: new ol.style.Fill({
      color: [0, 0, 255, 0.6]
      // 蓝色
    })
  })
})

map.addLayer(layer2);

// 把上面的改一改

// 在地图上添加一个图标
var tubc = new ol.Feature({
  geometry: new ol.geom.Point([25869.18703182775,-12618.09481202264]),
})
var iconStyle = new ol.style.Style({
  image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
     anchor: [0.5, 46],
     anchorXUnits: 'fraction',
     anchorYUnits: 'pixels',
     opacity: 0.95,
     src: 'https://openlayers.org/en/v4.0.1/examples/data/icon.png'
  }))
})


tubc.setStyle(iconStyle)
 // 此处不再为feature设置style
featuresSource.addFeature(tubc);
