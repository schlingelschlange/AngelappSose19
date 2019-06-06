import { Component, OnInit } from '@angular/core';
import { KameraFachlicheLogikService } from '../kamera-fachliche-logik.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kamera-view',
  templateUrl: './kamera-view.page.html',
  styleUrls: ['./kamera-view.page.scss'],
})
export class KameraViewPage implements OnInit {

  image:any;
  coordinates:any;
  temp:any = "28";
  time:any = new Date();
  fisch:any = "Lachs";
  size:any = "100";
  id:any ="1559569043000";

 constructor(
   private kameraService: KameraFachlicheLogikService,
   private router: Router) { 
    
  }

  async ngOnInit() {
    this.image = await this.kameraService.makePicture();
  }

  async openKamera(){
    this.image = await this.kameraService.makePicture();
  }
  
  async upload(){
      if(this.image){
        this.id = this.kameraService.uploadPicture(this.image);
        await this.kameraService.saveData(this.id, this.temp, this.time, this.fisch, this.size);
        this.router.navigateByUrl('/home');
      } 
      
  }

}
