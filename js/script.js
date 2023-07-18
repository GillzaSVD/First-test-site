ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map("map", {
            center: [61.698679, 99.505266],
            zoom: 4,
            controls: []
        }),

        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        nsk = new ymaps.Placemark([55.038098, 82.924032], {
            balloonContentHeader: "ФК Новосибирск",
            balloonContentBody: "Основан 10 июня 2019 года.",
            balloonContentFooter: "<a href='https://fcnsk.com/' target='_blank'>Сайт клуба",
            hintContent: "ФК Новосибирск"
        },{
          iconLayout: 'default#imageWithContent',
          iconImageHref: 'img/nsk_logo.png',
          iconImageSize: [50, 55],
          iconImageOffset: [-25, -27]
        }),
        spartak = new ymaps.Placemark([55.817820, 37.439194], {
            balloonContentHeader: "ФК Спартак",
            balloonContentBody: "Основан 18 апреля 1922 года.",
            balloonContentFooter: "<a href='https://spartak.com/' target='_blank'>Сайт клуба",
            hintContent: "ФК Спартак"
        },{
          iconLayout: 'default#imageWithContent',
          iconImageHref: 'img/Spartak_logo.png',
          iconImageSize: [60, 40],
          iconImageOffset: [-30, -20]
        }),
        cska = new ymaps.Placemark([55.792194, 37.515964], {
            balloonContentHeader: "ФК ЦСКА",
            balloonContentBody: "Основан 27 августа 1911 года.",
            balloonContentFooter: "<a href='https://www.pfc-cska.com/' target='_blank'>Сайт клуба",
            hintContent: "ФК ЦСКА"
        },{
          iconLayout: 'default#imageWithContent',
          iconImageHref: 'img/CSKA.png',
          iconImageSize: [40, 55],
          iconImageOffset: [-20, -23]
        }),
        loc = new ymaps.Placemark([55.802801, 37.741773], {
            balloonContentHeader: "ФК Локомотив",
            balloonContentBody: "Основан 23 июля 1922 года.",
            balloonContentFooter: "<a href='https://www.fclm.ru/' target='_blank'>Сайт клуба",
            hintContent: "ФК Локомотив"
        },{
          iconLayout: 'default#imageWithContent',
          iconImageHref: 'img/FC_Lokomotiv.png',
          iconImageSize: [33, 40],
          iconImageOffset: [-17, -20]
        }),
        kras = new ymaps.Placemark([45.044457, 39.028314], {
            balloonContentHeader: "ФК Краснодар",
            balloonContentBody: "Основан 22 февраля 2008 года.",
            balloonContentFooter: "<a href='https://fckrasnodar.ru/' target='_blank'>Сайт клуба",
            hintContent: "ФК Краснодар"
        },{
          iconLayout: 'default#imageWithContent',
          iconImageHref: 'img/FC_Krasnodar.png',
          iconImageSize: [33, 40],
          iconImageOffset: [-17, -20]
        }),
        zenit = new ymaps.Placemark([59.973154, 30.219227], {
            balloonContentHeader: "ФК Зенит",
            balloonContentBody: "Основан 25 мая 1925 года.",
            balloonContentFooter: "<a href='https://fc-zenit.ru/' target='_blank'>Сайт клуба",
            hintContent: "ФК Зенит"
        },{
          iconLayout: 'default#imageWithContent',
          iconImageHref: 'img/zen_logo.png',
          iconImageSize: [50, 35],
          iconImageOffset: [-25, -17]
        });;
    myMap.controls.add('zoomControl');
    myMap.controls.add('searchControl');
    myMap.geoObjects.add(nsk);
    myMap.geoObjects.add(spartak);
    myMap.geoObjects.add(zenit);
    myMap.geoObjects.add(cska);
    myMap.geoObjects.add(loc);
    myMap.geoObjects.add(kras);
}

$(document).ready(function(){
				$('a.btn').click(function(){
					$("div.bga").fadeOut(1000);
          return false;
				});
				});
