import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { NotificationSettingsPageRoutingModule } from './notification-settings-routing.module';

import { NotificationSettingsPage } from './notification-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NotificationSettingsPageRoutingModule
  ],
  declarations: [NotificationSettingsPage]
})
export class NotificationSettingsPageModule {}
