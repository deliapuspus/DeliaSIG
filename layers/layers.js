var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Bangunan25K_1 = new ol.format.GeoJSON();
var features_Bangunan25K_1 = format_Bangunan25K_1.readFeatures(json_Bangunan25K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan25K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan25K_1.addFeatures(features_Bangunan25K_1);
var lyr_Bangunan25K_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bangunan25K_1, 
                style: style_Bangunan25K_1,
                interactive: true,
                title: '<img src="styles/legend/Bangunan25K_1.png" /> Bangunan 25K'
            });
var format_building_2 = new ol.format.GeoJSON();
var features_building_2 = format_building_2.readFeatures(json_building_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_2.addFeatures(features_building_2);
var lyr_building_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_2, 
                style: style_building_2,
                interactive: true,
                title: '<img src="styles/legend/building_2.png" /> building'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Bangunan25K_1.setVisible(true);lyr_building_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Bangunan25K_1,lyr_building_2];
lyr_Bangunan25K_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Name of Building', 'FCODE': 'Feature Code', 'REMARK': 'Notes', 'SRS_ID': 'Spatial Reference System Identifier', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_building_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'religion': 'religion', 'name': 'name', 'capacity:persons': 'capacity:persons', 'building:structure': 'building:structure', 'building:roof': 'building:roof', 'building:material': 'building:material', 'building:levels': 'building:levels', 'building:floor': 'building:floor', 'backup_generator': 'backup_generator', 'amenity': 'amenity', 'addr:full': 'addr:full', 'addr:city': 'addr:city', 'access:roof': 'access:roof', });
lyr_Bangunan25K_1.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr_building_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'religion': '', 'name': '', 'capacity:persons': '', 'building:structure': '', 'building:roof': '', 'building:material': '', 'building:levels': '', 'building:floor': '', 'backup_generator': '', 'amenity': '', 'addr:full': '', 'addr:city': '', 'access:roof': '', });
lyr_Bangunan25K_1.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr_building_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'religion': 'no label', 'name': 'no label', 'capacity:persons': 'no label', 'building:structure': 'no label', 'building:roof': 'no label', 'building:material': 'no label', 'building:levels': 'no label', 'building:floor': 'no label', 'backup_generator': 'no label', 'amenity': 'no label', 'addr:full': 'no label', 'addr:city': 'no label', 'access:roof': 'no label', });
lyr_building_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});