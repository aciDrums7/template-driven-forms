import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserSettings} from '../model/user-settings';
import {catchError, Observable, of, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserSettingsService {

  _endpoint: string = 'https://putsreq.com/tuacAYwaWqHNWNbSuv4r';

  any: any;

  get endpoint(): string {
    return this._endpoint;
  }

  constructor(private http: HttpClient) { }

  postUserSettings(userSettings: UserSettings): Observable<any> {
    return this.http.post(this.endpoint, userSettings).pipe(
      tap(value => console.log('POST user settings: ', JSON.stringify(userSettings))),
      //catchError(this.any)
    );

    //return of(userSettings);
  }

  getSubscriptionTypes(): Observable<string[]> {
    return of(['Monthly', 'Annual', 'Lifetime']);
  }
}
