import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import * as jsPDF from 'jspdf'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pdfUrl: string;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    var doc = new jsPDF();
    doc.setFontStyle('Bold');
    doc.setFontSize(14);
    doc.text('Testing PDFs', 20, 20);
    var blob = doc.output('blob', {type: 'application/pdf'});
    this.pdfUrl = URL.createObjectURL(blob)
  }

}
