import { LogInPage } from './../log-in/log-in';
import { FirstPage } from './../first/first';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {AlertController} from  'ionic-angular';




/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 declare var firebase;
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})


export class HomePage {
  private todo : FormGroup;
  // email;
  // password;

  constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder: FormBuilder, private alertCtrl:AlertController ) {

    this.todo = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      username: ['', Validators.required],
      gender: ['', Validators.required],
      dof: ['', Validators.required],
    });
  }
  logForm(){
    console.log(this.todo.value)
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }




  SignUp(){
     
   firebase.auth().createUserWithEmailAndPassword(this.todo.value.email,this.todo.value.password).then(user=>{
     
    this.navCtrl.push(LogInPage)
    })

  }

  SignIn(){

    this.navCtrl.push(LogInPage);
  }


  logInWithGoogle(){

    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });


    firebase.auth().getRedirectResult().then(function(result) {
      if (result.credential) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // ...
      }
      // The signed-in user info.
      var user = result.user;
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }


  
  ForgotPassword(){

     this.navCtrl.push('ResertPage');

    // let prompt = this.alertCtrl.create({

    //   title: 'Enter Your Email',
    //   message: " A new password will be sent to your email",
    //   inputs: [
    //     {
    //       name: 'email',
    //       placeholder: 'Email'
    //     },
    //   ],
    //   buttons: [
    //     {
    //       text: 'Cancel',
    //       handler: data => {

    //         console.log('Cancel clicked');
    //       }

    //     },
    //     {
    //       text: 'Submit',
    //       handler: data => {

    //       }
    //     }
    //   ]
    // });
    // prompt.present();
  }
}
