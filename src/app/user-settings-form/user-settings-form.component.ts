import { Component, OnInit } from '@angular/core';
import {UserSettings} from '../model/user-settings';
import {NgForm, NgModel} from '@angular/forms';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  /*originalUserSetting: UserSettings = {
    name: 'Edoardo',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    notes:
      "Black\n"+
      "Then\n"+
      "White Are\n" +
      "All I See\n" +
      "In My Infancy\n" +
      "Red And Yellow Than Came To Be\n" +
      "Reachin' Out To Me\n" +
      "Let's Me See\n"
  }*/

  originalUserSetting: UserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null
  }

  userSetting: UserSettings = { ...this.originalUserSetting };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log('In onSubmit(): ', form.valid)
  }

  onBlur(field: NgModel) {
    console.log('In onBlur(): ', field.valid)
  }
}
