import { Component ,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
//import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the SignaturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signature',
  templateUrl: 'signature.html',
})

export class SignaturePage {
  signature = '';
  isDrawing = false;
  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  
  private signaturePadOptions: Object = { 
    'minWidth': 2,
    'canvasWidth': 300,
    'canvasHeight': 450,
    'penColor': 'red'
    // 'backgroundColor': '#f6fbff',
    
  };
  
  public signatureImage : any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
   // public storage: Storage,
    public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
   // console.log('ionViewDidLoad SignaturePage');
    //console.log(this.signaturePadOptions);
  }
  ionViewDidEnter() {
    this.signaturePad.clear()
    // this.storage.get('savedSignature').then((data) => {
    //   this.signature = data;
    // });
  }
  /*
  drawComplete() {
    this.isDrawing = false;
  }
  */
  drawStart() {
    this.isDrawing = true;
  }

  savePad() {
    this.signatureImage = this.signaturePad.toDataURL();
    console.log(this.signatureImage);
    this.signaturePad.clear();
    let toast = this.toastCtrl.create({
      message: 'New Signature saved.',
      duration: 1000,
      position: 'top'
    });
    toast.present();
  }

drawCancel() {
 // this.navCtrl.push(HomePage);
}

 drawComplete() {
  this.signatureImage = this.signaturePad.toDataURL();
 // this.navCtrl.push(HomePage, {signatureImage: this.signatureImage});
}

drawClear() {
  this.signaturePad.clear();
}
canvasResize() {
  let canvas = document.querySelector('canvas');
  this.signaturePad.set('minWidth', 1);
  this.signaturePad.set('canvasWidth', canvas.offsetWidth);
  this.signaturePad.set('canvasHeight', canvas.offsetHeight);
}

ngAfterViewInit() {
    this.signaturePad.clear();
    this.canvasResize();
}

}
