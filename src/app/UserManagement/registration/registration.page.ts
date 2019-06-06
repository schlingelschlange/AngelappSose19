import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  signIn(){
    this.router.navigateByUrl('/login');
  }

  signUp(firstName, surName, email, password1, password2){
    if(password1.value === password2.value){
      firebase.auth().createUserWithEmailAndPassword(email.value, password1.value).then((res)=>{
        this.saveAdditionalUserData(firstName.value, surName.value, email.value);
      }).catch(function(error) {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(error.message);
      });
    }
  }

  saveAdditionalUserData(firstName, surName, email,){
    let userKey = firebase.database().ref().child('user').push().key;

    firebase.database().ref('user/' + userKey).set({
      firstName: firstName,
      surName: surName,
      email: email
    });
  }
}
