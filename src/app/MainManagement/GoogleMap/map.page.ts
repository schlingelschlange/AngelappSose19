import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var google;

import * as firebase from 'firebase';

@Component({
  selector: 'app-list',
  templateUrl: 'map.page.html',
  styleUrls: ['map.page.scss']
})
export class GoogleMapPage implements OnInit {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  imageId:any;

  constructor() {
  }

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    setTimeout(() => {
      let latLng = new google.maps.LatLng(48.050144, 8.201419);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.setMarker(this.map);
    }, 1000);
  }


  async setMarker(map) {
    let userId =  await firebase.auth().currentUser.uid;
    const storageRef = firebase.storage().ref();

    firebase.database().ref('user/' + userId + '/fish').once('value').then(  (snapshot) => {
      
      snapshot.forEach( (child) => {
        this.imageId =  child.val().id;


        storageRef.child(this.imageId).getDownloadURL().then((url) =>{
          this.imageId = url.toString();
          console.log("get", this.imageId)
          let marker = new google.maps.Marker({
            position: { lat: Number(child.val().lat), lng: Number(child.val().lng) },
            map: map,
            title: "test",
          });
  
      
          var contentString = 
          this.imageId+
          '<div><p>Hier ist dein Fisch</p><img style="height:150px;width:150px;" src="'+ this.imageId +'" /></div>' +
          "Fischart:" + child.val().fisch +  "Fisch Größe:" +  child.val().size
           + "Temperatur:" +  child.val().temp;
  
          var infowindow = new google.maps.InfoWindow({
            content: contentString
          });
          marker.addListener('click', function () {
            infowindow.open(map, marker);
          });
        }); 

      });
    });
  }
}
