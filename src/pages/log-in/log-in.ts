import { FirstPage } from './../first/first';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the LogInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 declare var firebase;
@IonicPage()
@Component({
  selector: 'page-log-in',
  templateUrl: 'log-in.html',
})
export class LogInPage {

  private todo : FormGroup;
  // email;
  // password;

  constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder: FormBuilder) {

    
    this.todo = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['',Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogInPage');
  }


  
  LogIn(){


    firebase.auth().signInWithEmailAndPassword(this.todo.value.email, this.todo.value.password).then(user=>{
      console.log("works");
      this.navCtrl.push(FirstPage);
    }

    ).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      console.log("does not work")
    });

    // console.log(this.email);

    // firebase.auth().signInUserWithEmailAndPassword(this.email,this.password).then(user=>{
     
    //   //this.navCtrl.push(FirstPage)
    //   });

      
  }


}
