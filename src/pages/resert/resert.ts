import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the ResertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 declare var firebase;
@IonicPage()
@Component({
  selector: 'page-resert',
  templateUrl: 'resert.html',
})
export class ResertPage {

  private todo : FormGroup;
  email
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder,private toastCtrl: ToastController) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResertPage');
  }


  resert(){
    var auth = firebase.auth();
    var emailAddress = this.email;
    console.log(emailAddress)
    auth.sendPasswordResetEmail(emailAddress).then((message)=> {
      // Email sent.
      const toast = this.toastCtrl.create({
        message: "Email was successfully sent to "+emailAddress,
        showCloseButton: true,
        closeButtonText: 'Ok',
        position: 'middle'
      });
      toast.onDidDismiss(()=>{
        console.log('toast button cliked..')
        
      });
      toast.present();
   }).catch((error)=> {
      // An error happened.
      var errorCode = error.code;
      var errorMessage = error.message
      const toast = this.toastCtrl.create({
        message: errorMessage,
        showCloseButton: true,
        closeButtonText: 'Ok',
        position: 'middle'
      });
      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });
    
      toast.present(); 
    });
  }

}