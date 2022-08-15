import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserSettings} from '../model/user-settings';
import {NgForm, NgModel} from '@angular/forms';
import {UserSettingsService} from '../api/user-settings.service';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit, OnDestroy {

  sub!: Subscription;
  postError: boolean | undefined;
  postErrorMessage: string | undefined;
  subscriptionTypes!: Observable<string[]>;

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

  originalUserSettings: UserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null
  }

  userSettings: UserSettings = { ...this.originalUserSettings };


  constructor(private service: UserSettingsService) { }

  ngOnInit(): void {
    //in the template, using the 'async' pipe, the Observable is auto handled!
    //'async' pipe waits until a value is emitted, it auto sub & unsub
    this.subscriptionTypes = this.service.getSubscriptionTypes();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onHttpError(errorResponse: any) {
    console.log('error: ', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.sub = this.service.postUserSettings(this.userSettings).subscribe({
        next: value => console.log('success: ', value),
        error: err => this.onHttpError(err)
      });
    } else {
      this.postError = true;
      this.postErrorMessage = 'Please fill the form correctly before submit';
    }
  }


  onBlur(field: NgModel) {
    console.log('In onBlur(): ', field.valid);
  }

}
