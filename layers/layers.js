var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_diangopoly_1 = new ol.format.GeoJSON();
var features_diangopoly_1 = format_diangopoly_1.readFeatures(json_diangopoly_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_diangopoly_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_diangopoly_1.addFeatures(features_diangopoly_1);
var lyr_diangopoly_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_diangopoly_1, 
                style: style_diangopoly_1,
                popuplayertitle: 'diango poly',
                interactive: true,
                title: '<img src="styles/legend/diangopoly_1.png" /> diango poly'
            });
var format_Manjaba_2 = new ol.format.GeoJSON();
var features_Manjaba_2 = format_Manjaba_2.readFeatures(json_Manjaba_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Manjaba_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Manjaba_2.addFeatures(features_Manjaba_2);
var lyr_Manjaba_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Manjaba_2, 
                style: style_Manjaba_2,
                popuplayertitle: 'Manjaba',
                interactive: true,
                title: '<img src="styles/legend/Manjaba_2.png" /> Manjaba'
            });
var format_NumeroManjaba_3 = new ol.format.GeoJSON();
var features_NumeroManjaba_3 = format_NumeroManjaba_3.readFeatures(json_NumeroManjaba_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NumeroManjaba_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NumeroManjaba_3.addFeatures(features_NumeroManjaba_3);
var lyr_NumeroManjaba_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NumeroManjaba_3, 
                style: style_NumeroManjaba_3,
                popuplayertitle: 'Numero Manjaba',
                interactive: false,
                title: '<img src="styles/legend/NumeroManjaba_3.png" /> Numero Manjaba'
            });
var format_RUISDIA_4 = new ol.format.GeoJSON();
var features_RUISDIA_4 = format_RUISDIA_4.readFeatures(json_RUISDIA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUISDIA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUISDIA_4.addFeatures(features_RUISDIA_4);
var lyr_RUISDIA_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUISDIA_4, 
                style: style_RUISDIA_4,
                popuplayertitle: 'RUIS DIA',
                interactive: true,
                title: '<img src="styles/legend/RUISDIA_4.png" /> RUIS DIA'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_diangopoly_1.setVisible(true);lyr_Manjaba_2.setVisible(true);lyr_NumeroManjaba_3.setVisible(true);lyr_RUISDIA_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_diangopoly_1,lyr_Manjaba_2,lyr_NumeroManjaba_3,lyr_RUISDIA_4];
lyr_diangopoly_1.set('fieldAliases', {'di': 'di', });
lyr_Manjaba_2.set('fieldAliases', {'conf': 'conf', });
lyr_NumeroManjaba_3.set('fieldAliases', {'nu': 'nu', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_show': 'auxiliary_storage_labeling_show', 'auxiliary_storage_labeling_labelrotation': 'auxiliary_storage_labeling_labelrotation', 'auxiliary_storage_labeling_family': 'auxiliary_storage_labeling_family', 'auxiliary_storage_labeling_fontstyle': 'auxiliary_storage_labeling_fontstyle', 'auxiliary_storage_labeling_size': 'auxiliary_storage_labeling_size', 'auxiliary_storage_labeling_bold': 'auxiliary_storage_labeling_bold', 'auxiliary_storage_labeling_italic': 'auxiliary_storage_labeling_italic', 'auxiliary_storage_labeling_underline': 'auxiliary_storage_labeling_underline', 'auxiliary_storage_labeling_color': 'auxiliary_storage_labeling_color', 'auxiliary_storage_labeling_strikeout': 'auxiliary_storage_labeling_strikeout', 'auxiliary_storage_labeling_multilinealignment': 'auxiliary_storage_labeling_multilinealignment', 'auxiliary_storage_labeling_buffersize': 'auxiliary_storage_labeling_buffersize', 'auxiliary_storage_labeling_buffercolor': 'auxiliary_storage_labeling_buffercolor', 'auxiliary_storage_labeling_bufferdraw': 'auxiliary_storage_labeling_bufferdraw', 'auxiliary_storage_labeling_labeldistance': 'auxiliary_storage_labeling_labeldistance', 'auxiliary_storage_labeling_hali': 'auxiliary_storage_labeling_hali', 'auxiliary_storage_labeling_vali': 'auxiliary_storage_labeling_vali', 'auxiliary_storage_labeling_scalevisibility': 'auxiliary_storage_labeling_scalevisibility', 'auxiliary_storage_labeling_minscale': 'auxiliary_storage_labeling_minscale', 'auxiliary_storage_labeling_maxscale': 'auxiliary_storage_labeling_maxscale', 'auxiliary_storage_labeling_alwaysshow': 'auxiliary_storage_labeling_alwaysshow', 'auxiliary_storage_labeling_calloutdraw': 'auxiliary_storage_labeling_calloutdraw', 'auxiliary_storage_labeling_labelallparts': 'auxiliary_storage_labeling_labelallparts', });
lyr_RUISDIA_4.set('fieldAliases', {'F': 'F', });
lyr_diangopoly_1.set('fieldImages', {'di': '', });
lyr_Manjaba_2.set('fieldImages', {'conf': '', });
lyr_NumeroManjaba_3.set('fieldImages', {'nu': '', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_show': 'Hidden', 'auxiliary_storage_labeling_labelrotation': 'Hidden', 'auxiliary_storage_labeling_family': 'Hidden', 'auxiliary_storage_labeling_fontstyle': 'Hidden', 'auxiliary_storage_labeling_size': 'Hidden', 'auxiliary_storage_labeling_bold': 'Hidden', 'auxiliary_storage_labeling_italic': 'Hidden', 'auxiliary_storage_labeling_underline': 'Hidden', 'auxiliary_storage_labeling_color': 'Hidden', 'auxiliary_storage_labeling_strikeout': 'Hidden', 'auxiliary_storage_labeling_multilinealignment': 'Hidden', 'auxiliary_storage_labeling_buffersize': 'Hidden', 'auxiliary_storage_labeling_buffercolor': 'Hidden', 'auxiliary_storage_labeling_bufferdraw': 'Hidden', 'auxiliary_storage_labeling_labeldistance': 'Hidden', 'auxiliary_storage_labeling_hali': 'Hidden', 'auxiliary_storage_labeling_vali': 'Hidden', 'auxiliary_storage_labeling_scalevisibility': 'Hidden', 'auxiliary_storage_labeling_minscale': 'Hidden', 'auxiliary_storage_labeling_maxscale': 'Hidden', 'auxiliary_storage_labeling_alwaysshow': 'Hidden', 'auxiliary_storage_labeling_calloutdraw': 'Hidden', 'auxiliary_storage_labeling_labelallparts': 'Hidden', });
lyr_RUISDIA_4.set('fieldImages', {'F': '', });
lyr_diangopoly_1.set('fieldLabels', {'di': 'inline label - always visible', });
lyr_Manjaba_2.set('fieldLabels', {'conf': 'inline label - always visible', });
lyr_NumeroManjaba_3.set('fieldLabels', {'nu': 'inline label - visible with data', });
lyr_RUISDIA_4.set('fieldLabels', {'F': 'inline label - always visible', });
lyr_RUISDIA_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});