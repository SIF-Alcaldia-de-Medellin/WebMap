var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_shp_barrios_y_veredasbarrios_y_veredasshp_1 = new ol.format.GeoJSON();
var features_shp_barrios_y_veredasbarrios_y_veredasshp_1 = format_shp_barrios_y_veredasbarrios_y_veredasshp_1.readFeatures(json_shp_barrios_y_veredasbarrios_y_veredasshp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_shp_barrios_y_veredasbarrios_y_veredasshp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_shp_barrios_y_veredasbarrios_y_veredasshp_1.addFeatures(features_shp_barrios_y_veredasbarrios_y_veredasshp_1);
var lyr_shp_barrios_y_veredasbarrios_y_veredasshp_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_shp_barrios_y_veredasbarrios_y_veredasshp_1, 
                style: style_shp_barrios_y_veredasbarrios_y_veredasshp_1,
                popuplayertitle: 'shp_barrios_y_veredas — barrios_y_veredas.shp',
                interactive: true,
                title: '<img src="styles/legend/shp_barrios_y_veredasbarrios_y_veredasshp_1.png" /> shp_barrios_y_veredas — barrios_y_veredas.shp'
            });
var format_SEGUIMIENTO_ANDENES_AGOSTOC7_2 = new ol.format.GeoJSON();
var features_SEGUIMIENTO_ANDENES_AGOSTOC7_2 = format_SEGUIMIENTO_ANDENES_AGOSTOC7_2.readFeatures(json_SEGUIMIENTO_ANDENES_AGOSTOC7_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SEGUIMIENTO_ANDENES_AGOSTOC7_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SEGUIMIENTO_ANDENES_AGOSTOC7_2.addFeatures(features_SEGUIMIENTO_ANDENES_AGOSTOC7_2);
var lyr_SEGUIMIENTO_ANDENES_AGOSTOC7_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SEGUIMIENTO_ANDENES_AGOSTOC7_2, 
                style: style_SEGUIMIENTO_ANDENES_AGOSTOC7_2,
                popuplayertitle: 'SEGUIMIENTO_ ANDENES_AGOSTO C7',
                interactive: true,
                title: '<img src="styles/legend/SEGUIMIENTO_ANDENES_AGOSTOC7_2.png" /> SEGUIMIENTO_ ANDENES_AGOSTO C7'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_shp_barrios_y_veredasbarrios_y_veredasshp_1.setVisible(true);lyr_SEGUIMIENTO_ANDENES_AGOSTOC7_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_shp_barrios_y_veredasbarrios_y_veredasshp_1,lyr_SEGUIMIENTO_ANDENES_AGOSTOC7_2];
lyr_shp_barrios_y_veredasbarrios_y_veredasshp_1.set('fieldAliases', {'CODIGO': 'CODIGO', 'NOMBRE': 'NOMBRE', 'IDENTIFICA': 'IDENTIFICA', 'LIMITECOMU': 'LIMITECOMU', 'LIMITEMUNI': 'LIMITEMUNI', 'SUBTIPO_BA': 'SUBTIPO_BA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_SEGUIMIENTO_ANDENES_AGOSTOC7_2.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'codigo': 'codigo', 'orden_elem': 'orden_elem', 'id_segment': 'id_segment', 'ancho': 'ancho', 'altura': 'altura', 'longitud': 'longitud', 'estado': 'estado', 'homogeneo': 'homogeneo', 'homolgado': 'homolgado', 'obstaculo': 'obstaculo', 'material': 'material', 'id_element': 'id_element', });
lyr_shp_barrios_y_veredasbarrios_y_veredasshp_1.set('fieldImages', {'CODIGO': 'TextEdit', 'NOMBRE': 'TextEdit', 'IDENTIFICA': 'TextEdit', 'LIMITECOMU': 'TextEdit', 'LIMITEMUNI': 'TextEdit', 'SUBTIPO_BA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SEGUIMIENTO_ANDENES_AGOSTOC7_2.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'codigo': 'TextEdit', 'orden_elem': 'TextEdit', 'id_segment': 'TextEdit', 'ancho': 'TextEdit', 'altura': 'TextEdit', 'longitud': 'TextEdit', 'estado': 'TextEdit', 'homogeneo': 'TextEdit', 'homolgado': 'TextEdit', 'obstaculo': 'TextEdit', 'material': 'TextEdit', 'id_element': 'TextEdit', });
lyr_shp_barrios_y_veredasbarrios_y_veredasshp_1.set('fieldLabels', {'CODIGO': 'no label', 'NOMBRE': 'no label', 'IDENTIFICA': 'no label', 'LIMITECOMU': 'no label', 'LIMITEMUNI': 'no label', 'SUBTIPO_BA': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_SEGUIMIENTO_ANDENES_AGOSTOC7_2.set('fieldLabels', {'fid': 'no label', 'objectid': 'no label', 'codigo': 'no label', 'orden_elem': 'no label', 'id_segment': 'no label', 'ancho': 'no label', 'altura': 'no label', 'longitud': 'no label', 'estado': 'no label', 'homogeneo': 'no label', 'homolgado': 'no label', 'obstaculo': 'no label', 'material': 'no label', 'id_element': 'no label', });
lyr_SEGUIMIENTO_ANDENES_AGOSTOC7_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});