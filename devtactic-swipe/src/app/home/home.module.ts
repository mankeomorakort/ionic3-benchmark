import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { SwingModule, SwingCardComponent, SwingStackComponent } from 'angular2-swing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwingModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  exports: [RouterModule],
  declarations: [HomePage],
})
export class HomePageModule {}
