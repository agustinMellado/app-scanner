import { Component } from '@angular/core';
import { QRCodeModule } from 'angularx-qrcode'
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule,  QRCodeModule],
})
export class HomePage {

  qrCodeString='Mensaje secreto en el QR'
  scannedResult:any
  constructor() {}
  startScan(){}



}
