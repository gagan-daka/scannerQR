import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var mapboxgl: any;
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit, AfterViewInit {

  lat: number;
  lng: number;
  data:any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let geo: any = this.route.snapshot.paramMap.get('geo');
    geo = geo.substr(4, geo.length);
    geo = geo.split(",");
    this.lat = Number(geo[0]);
    this.lng = Number(geo[1]);
  }

  /*ngAfterViewInit(){
    
    mapboxgl.accessToken = 'pk.eyJ1IjoiZ2FnYW5pdGIiLCJhIjoiY2tvMDd0cGRqMGQ0YzJ3b2JnZHlrczhhOSJ9.NTKeJveclRBbgUKAzwxl9w';
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11'
    });
  }*/
  ngAfterViewInit(): void {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2VyZ2lpdGIiLCJhIjoiY2tudnA5NDF2MDRqbzJwbnZmbW42N2ZtOSJ9.P9FBpzeBXJ4PJ3r7E-byow';
    console.log("AAAAAAAAA",this.lat,this.lng)
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.lng, this.lat],
      zoom: 15.5,
      pitch: 45,
      bearing: -17.6,
      antialias: true
    });
    map.on('load', function () {
      var layers = map.getStyle().layers;
      var labelLayerId;
      for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
          labelLayerId = layers[i].id;
          break;
        }
      }
      map.addLayer(
        {
          'id': 'add-3d-buildings',
          'source': 'composite',
          'source-layer': 'building',
          'filter': ['==', 'extrude', 'true'],
          'type': 'fill-extrusion',
          'minzoom': 15,
          'paint': {
            'fill-extrusion-color': '#aaa',
            'fill-extrusion-height': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'height']
            ],
            'fill-extrusion-base': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'min_height']
            ],
            'fill-extrusion-opacity': 0.6
          }
        },
        labelLayerId
      );
    });
    var marker = new mapboxgl.Marker().setLngLat([this.lng, this.lat]).addTo(map);
  }

}
