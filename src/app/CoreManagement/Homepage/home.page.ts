import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KameraFachlicheLogikService } from 'src/app/MainManagement/kamera-fachliche-logik.service';
import * as firebase from 'firebase';
import { ModalController } from '@ionic/angular';
import { ModalPage } from 'src/app/modal/modal.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  images: any = [];
  modal:any;

  constructor(
    private router: Router,
    private kameraService: KameraFachlicheLogikService,
    public modalCtrl: ModalController) {

    this.router.events.subscribe((res) =>{
      this.getImageData();
    });
 
  }

  async ngOnInit(){
    setTimeout(() =>{
      this.getImageData();
    },500);
  }


  async openKameraView(){
    this.router.navigateByUrl('/kamera-view');
  }

  goToMap(){
    this.router.navigateByUrl('/map');
  }

  async displayImageBig(id){
    if(id){
      this.modal = await this.modalCtrl.create({
        component: ModalPage,
        componentProps: {
          'id': id,
        }
      });
      this.modal.present();
    }
  }

  async getImageData(){
    this.images = await this.kameraService.retrieveData().then(function (snapshot) {
      let fish = [];
      snapshot.forEach(function(child) {
          var item = child.val();
          item.key = child.key;
          fish.push(item);
      });
      return fish;
    });

    let storageRef = firebase.storage().ref();
      this.images.forEach(element => {
      storageRef.child(element.id).getDownloadURL().then((url) => {
        element.id =  url.toString();
      });
    });
  }

}
