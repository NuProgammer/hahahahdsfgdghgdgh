var wms_layers = [];

var format_ADMINISTRASIKECAMATAN_AR_50K_0 = new ol.format.GeoJSON();
var features_ADMINISTRASIKECAMATAN_AR_50K_0 = format_ADMINISTRASIKECAMATAN_AR_50K_0.readFeatures(json_ADMINISTRASIKECAMATAN_AR_50K_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIKECAMATAN_AR_50K_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKECAMATAN_AR_50K_0.addFeatures(features_ADMINISTRASIKECAMATAN_AR_50K_0);
var lyr_ADMINISTRASIKECAMATAN_AR_50K_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADMINISTRASIKECAMATAN_AR_50K_0, 
                style: style_ADMINISTRASIKECAMATAN_AR_50K_0,
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0.png" /> ADMINISTRASIKECAMATAN_AR_50K'
            });
var format_koordinatlokasi_1 = new ol.format.GeoJSON();
var features_koordinatlokasi_1 = format_koordinatlokasi_1.readFeatures(json_koordinatlokasi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_koordinatlokasi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_koordinatlokasi_1.addFeatures(features_koordinatlokasi_1);
var lyr_koordinatlokasi_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_koordinatlokasi_1, 
                style: style_koordinatlokasi_1,
                interactive: true,
                title: '<img src="styles/legend/koordinatlokasi_1.png" /> koordinat lokasi'
            });

lyr_ADMINISTRASIKECAMATAN_AR_50K_0.setVisible(true);lyr_koordinatlokasi_1.setVisible(true);
var layersList = [lyr_ADMINISTRASIKECAMATAN_AR_50K_0,lyr_koordinatlokasi_1];
lyr_ADMINISTRASIKECAMATAN_AR_50K_0.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_koordinatlokasi_1.set('fieldAliases', {'id': 'id', 'keterangan': 'keterangan', 'informasi': 'informasi', 'foto': 'foto', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_0.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_koordinatlokasi_1.set('fieldImages', {'id': 'TextEdit', 'keterangan': 'TextEdit', 'informasi': 'TextEdit', 'foto': 'ExternalResource', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_0.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_koordinatlokasi_1.set('fieldLabels', {'id': 'no label', 'keterangan': 'no label', 'informasi': 'no label', 'foto': 'no label', });
lyr_koordinatlokasi_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});