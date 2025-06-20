var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ANDENESSEGUIMIENTOMESJUNIO2025_c16_c15_1 = new ol.format.GeoJSON();
var features_ANDENESSEGUIMIENTOMESJUNIO2025_c16_c15_1 = format_ANDENESSEGUIMIENTOMESJUNIO2025_c16_c15_1.readFeatures(json_ANDENESSEGUIMIENTOMESJUNIO2025_c16_c15_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ANDENESSEGUIMIENTOMESJUNIO2025_c16_c15_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANDENESSEGUIMIENTOMESJUNIO2025_c16_c15_1.addFeatures(features_ANDENESSEGUIMIENTOMESJUNIO2025_c16_c15_1);
var lyr_ANDENESSEGUIMIENTOMESJUNIO2025_c16_c15_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ANDENESSEGUIMIENTOMESJUNIO2025_c16_c15_1, 
                style: style_ANDENESSEGUIMIENTOMESJUNIO2025_c16_c15_1,
                popuplayertitle: 'ANDENES SEGUIMIENTO MES JUNIO 2025_c16_c15',
                interactive: true,
                title: '<img src="styles/legend/ANDENESSEGUIMIENTOMESJUNIO2025_c16_c15_1.png" /> ANDENES SEGUIMIENTO MES JUNIO 2025_c16_c15'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ANDENESSEGUIMIENTOMESJUNIO2025_c16_c15_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ANDENESSEGUIMIENTOMESJUNIO2025_c16_c15_1];
lyr_ANDENESSEGUIMIENTOMESJUNIO2025_c16_c15_1.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'codigo': 'codigo', 'orden_elem': 'orden_elem', 'id_segment': 'id_segment', 'ancho': 'ancho', 'altura': 'altura', 'longitud': 'longitud', 'estado': 'estado', 'homogeneo': 'homogeneo', 'homolgado': 'homolgado', 'obstaculo': 'obstaculo', 'material': 'material', 'id_element': 'id_element', });
lyr_ANDENESSEGUIMIENTOMESJUNIO2025_c16_c15_1.set('fieldImages', {'fid': '', 'objectid': '', 'codigo': '', 'orden_elem': '', 'id_segment': '', 'ancho': '', 'altura': '', 'longitud': '', 'estado': '', 'homogeneo': '', 'homolgado': '', 'obstaculo': '', 'material': '', 'id_element': '', });
lyr_ANDENESSEGUIMIENTOMESJUNIO2025_c16_c15_1.set('fieldLabels', {'fid': 'no label', 'objectid': 'no label', 'codigo': 'no label', 'orden_elem': 'no label', 'id_segment': 'no label', 'ancho': 'no label', 'altura': 'no label', 'longitud': 'no label', 'estado': 'no label', 'homogeneo': 'no label', 'homolgado': 'no label', 'obstaculo': 'no label', 'material': 'no label', 'id_element': 'no label', });
lyr_ANDENESSEGUIMIENTOMESJUNIO2025_c16_c15_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});