var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Obszarnaktrymprzynajmniejrazpynarzeka_1 = new ol.format.GeoJSON();
var features_Obszarnaktrymprzynajmniejrazpynarzeka_1 = format_Obszarnaktrymprzynajmniejrazpynarzeka_1.readFeatures(json_Obszarnaktrymprzynajmniejrazpynarzeka_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Obszarnaktrymprzynajmniejrazpynarzeka_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Obszarnaktrymprzynajmniejrazpynarzeka_1.addFeatures(features_Obszarnaktrymprzynajmniejrazpynarzeka_1);
var lyr_Obszarnaktrymprzynajmniejrazpynarzeka_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Obszarnaktrymprzynajmniejrazpynarzeka_1, 
                style: style_Obszarnaktrymprzynajmniejrazpynarzeka_1,
                popuplayertitle: 'Obszar na którym przynajmniej raz płynęła rzeka',
                interactive: true,
                title: '<img src="styles/legend/Obszarnaktrymprzynajmniejrazpynarzeka_1.png" /> Obszar na którym przynajmniej raz płynęła rzeka'
            });
var format_Obszarnaktrymzawszepynarzeka_2 = new ol.format.GeoJSON();
var features_Obszarnaktrymzawszepynarzeka_2 = format_Obszarnaktrymzawszepynarzeka_2.readFeatures(json_Obszarnaktrymzawszepynarzeka_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Obszarnaktrymzawszepynarzeka_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Obszarnaktrymzawszepynarzeka_2.addFeatures(features_Obszarnaktrymzawszepynarzeka_2);
var lyr_Obszarnaktrymzawszepynarzeka_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Obszarnaktrymzawszepynarzeka_2, 
                style: style_Obszarnaktrymzawszepynarzeka_2,
                popuplayertitle: 'Obszar na którym zawsze płynęła rzeka',
                interactive: true,
                title: '<img src="styles/legend/Obszarnaktrymzawszepynarzeka_2.png" /> Obszar na którym zawsze płynęła rzeka'
            });
var format_Analizajakociowadlalat19402024_3 = new ol.format.GeoJSON();
var features_Analizajakociowadlalat19402024_3 = format_Analizajakociowadlalat19402024_3.readFeatures(json_Analizajakociowadlalat19402024_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Analizajakociowadlalat19402024_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Analizajakociowadlalat19402024_3.addFeatures(features_Analizajakociowadlalat19402024_3);
var lyr_Analizajakociowadlalat19402024_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Analizajakociowadlalat19402024_3, 
                style: style_Analizajakociowadlalat19402024_3,
                popuplayertitle: 'Analiza jakościowa dla lat 1940-2024',
                interactive: true,
    title: 'Analiza jakościowa dla lat 1940-2024<br />\
    <img src="styles/legend/Analizajakociowadlalat19402024_3_0.png" /> -100%- -60%<br />\
    <img src="styles/legend/Analizajakociowadlalat19402024_3_1.png" /> -60% - -20%<br />\
    <img src="styles/legend/Analizajakociowadlalat19402024_3_2.png" /> -20% - 0%<br />\
    <img src="styles/legend/Analizajakociowadlalat19402024_3_3.png" /> 0% - 20%<br />\
    <img src="styles/legend/Analizajakociowadlalat19402024_3_4.png" /> 20% - 60%<br />\
    <img src="styles/legend/Analizajakociowadlalat19402024_3_5.png" /> 60%-100%<br />' });
var format_Analizajakociowadlalat19902024_4 = new ol.format.GeoJSON();
var features_Analizajakociowadlalat19902024_4 = format_Analizajakociowadlalat19902024_4.readFeatures(json_Analizajakociowadlalat19902024_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Analizajakociowadlalat19902024_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Analizajakociowadlalat19902024_4.addFeatures(features_Analizajakociowadlalat19902024_4);
var lyr_Analizajakociowadlalat19902024_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Analizajakociowadlalat19902024_4, 
                style: style_Analizajakociowadlalat19902024_4,
                popuplayertitle: 'Analiza jakościowa dla lat 1990-2024',
                interactive: true,
    title: 'Analiza jakościowa dla lat 1990-2024<br />\
    <img src="styles/legend/Analizajakociowadlalat19902024_4_0.png" /> -100% - -60%<br />\
    <img src="styles/legend/Analizajakociowadlalat19902024_4_1.png" /> -60% - -20%<br />\
    <img src="styles/legend/Analizajakociowadlalat19902024_4_2.png" /> -20% - 0%<br />\
    <img src="styles/legend/Analizajakociowadlalat19902024_4_3.png" /> 0% - 20%<br />\
    <img src="styles/legend/Analizajakociowadlalat19902024_4_4.png" /> 20% - 60%<br />\
    <img src="styles/legend/Analizajakociowadlalat19902024_4_5.png" /> 60% - 100%<br />' });
var format_Analizailociowadlalat19401990_5 = new ol.format.GeoJSON();
var features_Analizailociowadlalat19401990_5 = format_Analizailociowadlalat19401990_5.readFeatures(json_Analizailociowadlalat19401990_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Analizailociowadlalat19401990_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Analizailociowadlalat19401990_5.addFeatures(features_Analizailociowadlalat19401990_5);
var lyr_Analizailociowadlalat19401990_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Analizailociowadlalat19401990_5, 
                style: style_Analizailociowadlalat19401990_5,
                popuplayertitle: 'Analiza ilościowa dla lat 1940-1990',
                interactive: true,
    title: 'Analiza ilościowa dla lat 1940-1990<br />\
    <img src="styles/legend/Analizailociowadlalat19401990_5_0.png" /> -100% - -60%<br />\
    <img src="styles/legend/Analizailociowadlalat19401990_5_1.png" /> -60% - -20%<br />\
    <img src="styles/legend/Analizailociowadlalat19401990_5_2.png" /> -20% - 0%<br />\
    <img src="styles/legend/Analizailociowadlalat19401990_5_3.png" /> 0 - 20<br />\
    <img src="styles/legend/Analizailociowadlalat19401990_5_4.png" /> 20% - 60%<br />\
    <img src="styles/legend/Analizailociowadlalat19401990_5_5.png" /> 60% - 100%<br />' });
var format_PrzebiegBuguw1940roku_6 = new ol.format.GeoJSON();
var features_PrzebiegBuguw1940roku_6 = format_PrzebiegBuguw1940roku_6.readFeatures(json_PrzebiegBuguw1940roku_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrzebiegBuguw1940roku_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrzebiegBuguw1940roku_6.addFeatures(features_PrzebiegBuguw1940roku_6);
var lyr_PrzebiegBuguw1940roku_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrzebiegBuguw1940roku_6, 
                style: style_PrzebiegBuguw1940roku_6,
                popuplayertitle: 'Przebieg Bugu w 1940 roku',
                interactive: true,
                title: '<img src="styles/legend/PrzebiegBuguw1940roku_6.png" /> Przebieg Bugu w 1940 roku'
            });
var format_PrzebiegBuguw1990roku_7 = new ol.format.GeoJSON();
var features_PrzebiegBuguw1990roku_7 = format_PrzebiegBuguw1990roku_7.readFeatures(json_PrzebiegBuguw1990roku_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrzebiegBuguw1990roku_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrzebiegBuguw1990roku_7.addFeatures(features_PrzebiegBuguw1990roku_7);
var lyr_PrzebiegBuguw1990roku_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrzebiegBuguw1990roku_7, 
                style: style_PrzebiegBuguw1990roku_7,
                popuplayertitle: 'Przebieg Bugu w 1990 roku',
                interactive: true,
                title: '<img src="styles/legend/PrzebiegBuguw1990roku_7.png" /> Przebieg Bugu w 1990 roku'
            });
var format_PrzebiegBuguw2024roku_8 = new ol.format.GeoJSON();
var features_PrzebiegBuguw2024roku_8 = format_PrzebiegBuguw2024roku_8.readFeatures(json_PrzebiegBuguw2024roku_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrzebiegBuguw2024roku_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrzebiegBuguw2024roku_8.addFeatures(features_PrzebiegBuguw2024roku_8);
var lyr_PrzebiegBuguw2024roku_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrzebiegBuguw2024roku_8, 
                style: style_PrzebiegBuguw2024roku_8,
                popuplayertitle: 'Przebieg Bugu w 2024 roku',
                interactive: true,
                title: '<img src="styles/legend/PrzebiegBuguw2024roku_8.png" /> Przebieg Bugu w 2024 roku'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Obszarnaktrymprzynajmniejrazpynarzeka_1.setVisible(true);lyr_Obszarnaktrymzawszepynarzeka_2.setVisible(true);lyr_Analizajakociowadlalat19402024_3.setVisible(false);lyr_Analizajakociowadlalat19902024_4.setVisible(false);lyr_Analizailociowadlalat19401990_5.setVisible(false);lyr_PrzebiegBuguw1940roku_6.setVisible(false);lyr_PrzebiegBuguw1990roku_7.setVisible(false);lyr_PrzebiegBuguw2024roku_8.setVisible(false);
var layersList = [lyr_OSMStandard_0,lyr_Obszarnaktrymprzynajmniejrazpynarzeka_1,lyr_Obszarnaktrymzawszepynarzeka_2,lyr_Analizajakociowadlalat19402024_3,lyr_Analizajakociowadlalat19902024_4,lyr_Analizailociowadlalat19401990_5,lyr_PrzebiegBuguw1940roku_6,lyr_PrzebiegBuguw1990roku_7,lyr_PrzebiegBuguw2024roku_8];
lyr_Obszarnaktrymprzynajmniejrazpynarzeka_1.set('fieldAliases', {'FID_BUG_19': 'FID_BUG_19', 'Id': 'Id', 'FID_Raster': 'FID_Raster', 'Id_1': 'Id_1', 'gridcode': 'gridcode', 'FID_HYDRO_': 'FID_HYDRO_', 'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID_12': 'ID_12', 'lengf': 'lengf', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Obszarnaktrymzawszepynarzeka_2.set('fieldAliases', {'FID_BUG_19': 'FID_BUG_19', 'Id': 'Id', 'FID_HYDRO_': 'FID_HYDRO_', 'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID_1': 'ID_1', 'lengf': 'lengf', 'FID_Raster': 'FID_Raster', 'Id_12': 'Id_12', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Analizajakociowadlalat19402024_3.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'GRID_ID': 'GRID_ID', 'PERCENTAGE': 'PERCENTAGE', 'Procent194': 'Procent194', 'Procent199': 'Procent199', 'Procent202': 'Procent202', 'roznica40_': 'roznica40_', 'roznica90_': 'roznica90_', 'num_roznic': 'num_roznic', 'num_rozn_1': 'num_rozn_1', 'num_rozn_2': 'num_rozn_2', });
lyr_Analizajakociowadlalat19902024_4.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'GRID_ID': 'GRID_ID', 'PERCENTAGE': 'PERCENTAGE', 'Procent194': 'Procent194', 'Procent199': 'Procent199', 'Procent202': 'Procent202', 'roznica40_': 'roznica40_', 'roznica90_': 'roznica90_', 'num_roznic': 'num_roznic', 'num_rozn_1': 'num_rozn_1', 'num_rozn_2': 'num_rozn_2', });
lyr_Analizailociowadlalat19401990_5.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'GRID_ID': 'GRID_ID', 'PERCENTAGE': 'PERCENTAGE', 'Procent194': 'Procent194', 'Procent199': 'Procent199', 'Procent202': 'Procent202', 'roznica40_': 'roznica40_', 'roznica90_': 'roznica90_', 'num_roznic': 'num_roznic', 'num_rozn_1': 'num_rozn_1', 'num_rozn_2': 'num_rozn_2', });
lyr_PrzebiegBuguw1940roku_6.set('fieldAliases', {'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_PrzebiegBuguw1990roku_7.set('fieldAliases', {'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID': 'ID', 'lengf': 'lengf', 'Shape_area': 'Shape_area', });
lyr_PrzebiegBuguw2024roku_8.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Obszarnaktrymprzynajmniejrazpynarzeka_1.set('fieldImages', {'FID_BUG_19': 'TextEdit', 'Id': 'TextEdit', 'FID_Raster': 'TextEdit', 'Id_1': 'TextEdit', 'gridcode': 'TextEdit', 'FID_HYDRO_': 'TextEdit', 'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID_12': 'TextEdit', 'lengf': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Obszarnaktrymzawszepynarzeka_2.set('fieldImages', {'FID_BUG_19': 'TextEdit', 'Id': 'TextEdit', 'FID_HYDRO_': 'TextEdit', 'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID_1': 'TextEdit', 'lengf': 'TextEdit', 'FID_Raster': 'TextEdit', 'Id_12': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Analizajakociowadlalat19402024_3.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'GRID_ID': 'TextEdit', 'PERCENTAGE': 'TextEdit', 'Procent194': 'TextEdit', 'Procent199': 'TextEdit', 'Procent202': 'TextEdit', 'roznica40_': 'TextEdit', 'roznica90_': 'TextEdit', 'num_roznic': 'TextEdit', 'num_rozn_1': 'TextEdit', 'num_rozn_2': 'TextEdit', });
lyr_Analizajakociowadlalat19902024_4.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'GRID_ID': 'TextEdit', 'PERCENTAGE': 'TextEdit', 'Procent194': 'TextEdit', 'Procent199': 'TextEdit', 'Procent202': 'TextEdit', 'roznica40_': 'TextEdit', 'roznica90_': 'TextEdit', 'num_roznic': 'TextEdit', 'num_rozn_1': 'TextEdit', 'num_rozn_2': 'TextEdit', });
lyr_Analizailociowadlalat19401990_5.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'GRID_ID': 'TextEdit', 'PERCENTAGE': 'TextEdit', 'Procent194': 'TextEdit', 'Procent199': 'TextEdit', 'Procent202': 'TextEdit', 'roznica40_': 'TextEdit', 'roznica90_': 'TextEdit', 'num_roznic': 'TextEdit', 'num_rozn_1': 'TextEdit', 'num_rozn_2': 'TextEdit', });
lyr_PrzebiegBuguw1940roku_6.set('fieldImages', {'Id': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PrzebiegBuguw1990roku_7.set('fieldImages', {'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID': 'TextEdit', 'lengf': 'TextEdit', 'Shape_area': 'TextEdit', });
lyr_PrzebiegBuguw2024roku_8.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Obszarnaktrymprzynajmniejrazpynarzeka_1.set('fieldLabels', {'FID_BUG_19': 'hidden field', 'Id': 'hidden field', 'FID_Raster': 'hidden field', 'Id_1': 'hidden field', 'gridcode': 'hidden field', 'FID_HYDRO_': 'hidden field', 'DLUG_BRZEG': 'hidden field', 'DLUGOSC': 'hidden field', 'DOKLADNOSC': 'hidden field', 'DOSTEPNOSC': 'hidden field', 'GLEBOKOSC': 'hidden field', 'ISTNIENIE': 'hidden field', 'KAT_HYDRO': 'hidden field', 'KAT_PLYWU': 'hidden field', 'KAT_POJEMN': 'hidden field', 'KAT_POLOZ': 'hidden field', 'KAT_WODY': 'hidden field', 'NAJW_WYS': 'hidden field', 'NAZWA': 'hidden field', 'OBIEKT': 'hidden field', 'OPR_UPUST': 'hidden field', 'OPR_ZBURZ': 'hidden field', 'POCH_HYDRO': 'hidden field', 'PRED_PRZEP': 'hidden field', 'SREDNIA_GL': 'hidden field', 'STAT_EKSPL': 'hidden field', 'SZEROKOSC': 'hidden field', 'TAJNOSC': 'hidden field', 'TYP_AKWED': 'hidden field', 'TYP_WYBRZ': 'hidden field', 'ZN_ORIENT': 'hidden field', 'POWIERZCHN': 'hidden field', 'ID_12': 'hidden field', 'lengf': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'inline label - visible with data', });
lyr_Obszarnaktrymzawszepynarzeka_2.set('fieldLabels', {'FID_BUG_19': 'hidden field', 'Id': 'hidden field', 'FID_HYDRO_': 'hidden field', 'DLUG_BRZEG': 'hidden field', 'DLUGOSC': 'hidden field', 'DOKLADNOSC': 'hidden field', 'DOSTEPNOSC': 'hidden field', 'GLEBOKOSC': 'hidden field', 'ISTNIENIE': 'hidden field', 'KAT_HYDRO': 'hidden field', 'KAT_PLYWU': 'hidden field', 'KAT_POJEMN': 'hidden field', 'KAT_POLOZ': 'hidden field', 'KAT_WODY': 'hidden field', 'NAJW_WYS': 'hidden field', 'NAZWA': 'hidden field', 'OBIEKT': 'hidden field', 'OPR_UPUST': 'hidden field', 'OPR_ZBURZ': 'hidden field', 'POCH_HYDRO': 'hidden field', 'PRED_PRZEP': 'hidden field', 'SREDNIA_GL': 'hidden field', 'STAT_EKSPL': 'hidden field', 'SZEROKOSC': 'hidden field', 'TAJNOSC': 'hidden field', 'TYP_AKWED': 'hidden field', 'TYP_WYBRZ': 'hidden field', 'ZN_ORIENT': 'hidden field', 'POWIERZCHN': 'hidden field', 'ID_1': 'hidden field', 'lengf': 'hidden field', 'FID_Raster': 'hidden field', 'Id_12': 'hidden field', 'gridcode': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'inline label - visible with data', });
lyr_Analizajakociowadlalat19402024_3.set('fieldLabels', {'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'GRID_ID': 'hidden field', 'PERCENTAGE': 'hidden field', 'Procent194': 'hidden field', 'Procent199': 'hidden field', 'Procent202': 'hidden field', 'roznica40_': 'hidden field', 'roznica90_': 'hidden field', 'num_roznic': 'hidden field', 'num_rozn_1': 'hidden field', 'num_rozn_2': 'inline label - always visible', });
lyr_Analizajakociowadlalat19902024_4.set('fieldLabels', {'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'GRID_ID': 'hidden field', 'PERCENTAGE': 'hidden field', 'Procent194': 'hidden field', 'Procent199': 'hidden field', 'Procent202': 'hidden field', 'roznica40_': 'hidden field', 'roznica90_': 'hidden field', 'num_roznic': 'hidden field', 'num_rozn_1': 'inline label - always visible', 'num_rozn_2': 'hidden field', });
lyr_Analizailociowadlalat19401990_5.set('fieldLabels', {'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'GRID_ID': 'hidden field', 'PERCENTAGE': 'hidden field', 'Procent194': 'hidden field', 'Procent199': 'hidden field', 'Procent202': 'hidden field', 'roznica40_': 'hidden field', 'roznica90_': 'hidden field', 'num_roznic': 'inline label - visible with data', 'num_rozn_1': 'hidden field', 'num_rozn_2': 'hidden field', });
lyr_PrzebiegBuguw1940roku_6.set('fieldLabels', {'Id': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'inline label - visible with data', });
lyr_PrzebiegBuguw1990roku_7.set('fieldLabels', {'DLUG_BRZEG': 'hidden field', 'DLUGOSC': 'hidden field', 'DOKLADNOSC': 'hidden field', 'DOSTEPNOSC': 'hidden field', 'GLEBOKOSC': 'hidden field', 'ISTNIENIE': 'hidden field', 'KAT_HYDRO': 'hidden field', 'KAT_PLYWU': 'hidden field', 'KAT_POJEMN': 'hidden field', 'KAT_POLOZ': 'hidden field', 'KAT_WODY': 'hidden field', 'NAJW_WYS': 'hidden field', 'NAZWA': 'hidden field', 'OBIEKT': 'hidden field', 'OPR_UPUST': 'hidden field', 'OPR_ZBURZ': 'hidden field', 'POCH_HYDRO': 'hidden field', 'PRED_PRZEP': 'hidden field', 'SREDNIA_GL': 'hidden field', 'STAT_EKSPL': 'hidden field', 'SZEROKOSC': 'hidden field', 'TAJNOSC': 'hidden field', 'TYP_AKWED': 'hidden field', 'TYP_WYBRZ': 'hidden field', 'ZN_ORIENT': 'hidden field', 'POWIERZCHN': 'hidden field', 'ID': 'hidden field', 'lengf': 'hidden field', 'Shape_area': 'inline label - visible with data', });
lyr_PrzebiegBuguw2024roku_8.set('fieldLabels', {'Id': 'hidden field', 'gridcode': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'inline label - always visible', });
lyr_PrzebiegBuguw2024roku_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});