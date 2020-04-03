import { Component } from '@angular/core';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';
import { ImageCroppedEvent } from 'ngx-image-cropper';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  takePhoto = 'take_photo';
  getPhoto = 'get_photo';
  croppedImage: string;
  imageBase64: any;


  constructor(private camera: Camera) {}

  async openProfileActionSheet() {
    this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
  }

  takePicture(sourceType: PictureSourceType) {
    const options: CameraOptions = {
      quality: 100,
      sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };
    this.camera.getPicture(options).then(imageData => {
      this.imageBase64 = 'data:image/png;base64,' + imageData;
      alert('data:image/png;base64,' + imageData);
    });
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    console.log(event);
  }

  loadImageFailed() {
    console.error('error');
  }

  searchBarBlur(event) {
    console.log(event);
  }

}
