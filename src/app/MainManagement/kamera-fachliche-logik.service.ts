import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import * as firebase from 'firebase';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class KameraFachlicheLogikService {

  gsReference:any;
  base64Image:any;

  constructor(
    private camera: Camera,
    private geolocation: Geolocation) {
    // firebase.initializeApp(environment.firebase)
  }

  async makePicture(){
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    try{
      const picture = await this.camera.getPicture(options);
      
      const image = `data:image/jpeg;base64,${picture}`;

      return image;

    }catch(e){
      console.log(e.message);
      // alert("File Upload Error " + e.message);
    }
  }

  uploadPicture(image){
    let date = new Date();
    try{
      const pictures = firebase.storage().ref('images/' + Date.parse(date.toString()));
      pictures.putString(image, 'data_url');
      return Date.parse(date.toString());
    }catch(e){
      console.log(e.message);
      alert("File Upload Error " + e.message);
    }
  }

  async saveData(id, temp, time, fisch, size){
    let child = 'images/' +  id;
    

    await this.geolocation.getCurrentPosition().then((resp) =>{
      let userId =  firebase.auth().currentUser.uid;
      let newFischKey = firebase.database().ref().child('fish').push().key;

      firebase.database().ref('user/' + userId + '/fish/' + newFischKey).set({
        id: child,
        lat: resp.coords.latitude,
        lng: resp.coords.longitude,
        temp : temp,
        time:time,
        fisch: fisch,
        size:size,
      });

    });

   
  }

  async retrieveData(){
    let userId;
    if(firebase.auth().currentUser){
      userId =  await firebase.auth().currentUser.uid;
    }
    return firebase.database().ref('user/' + userId + '/fish').once('value');
  }
  
}

