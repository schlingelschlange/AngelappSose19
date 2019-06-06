import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  fire: any = firebase.auth();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  signUp() {
    this.router.navigateByUrl('/signUp');
  }

  signIn(email, password) {

    // firebase.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     let userId;
    //     userId = firebase.auth().currentUser.uid;
    //     localStorage.setItem("userId", userId);
    //     this.router.navigateByUrl('/home');
    //   } else {
    //     
    //   }
    // });

    // firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    // .then((res) => this.router.navigateByUrl('/home'))
    // .catch(function(error) {
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    // });


    this.fire.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(() => {
          return firebase.auth().signInWithEmailAndPassword(email.value, password.value);
        }).then(() =>{
          this.router.navigateByUrl('/home');
        }).catch(function (error) {
          let errorCode = error.code;
          let errorMessage = error.message;
        });
  }


  signInFacebok(){
    let provider = new firebase.auth.FacebookAuthProvider();
    this.signInProvider(provider);
  }

  signInGoogle(){
    let provider = new firebase.auth.GoogleAuthProvider();
    this.signInProvider(provider);
  }

  signInProvider(provider){
    this.fire.signInWithRedirect(provider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    });
  }
}
