import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WiPageRoutingModule } from './wi-routing.module';

import { WiPage } from './wi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WiPageRoutingModule
  ],
  declarations: [WiPage]
})
export class WiPageModule {}
