import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  options: any = {};

  constructor(public navCtrl: NavController) {
    this.options = {
          apikey: "6ff5deed8aaa46c2fdcb1bfddd2d4ecc",
          city: { "name": ["Phnom Penh"] },
          unitFormat: "metric",
          lang: "en"
        }
  }
}
