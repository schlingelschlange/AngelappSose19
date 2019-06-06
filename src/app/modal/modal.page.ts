import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  imageId:any;

  constructor(
    public navParams: NavParams,
    private modalCtrl: ModalController) { }

  ngOnInit()  {
    setTimeout(() =>{
      this.imageId = this.navParams.get('id');
    },200);
  }

  close(){
    this.modalCtrl.dismiss();
  }

}
