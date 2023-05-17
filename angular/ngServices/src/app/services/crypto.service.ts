import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CryptoService {
  data = new Observable();
  url =
    'https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&limit=10';
  constructor(private http: HttpClient) {}

  getTestData() {
    this.data = new Observable((obs) => {
      setTimeout(() => {
        obs.next('Ido');
      }, 1000);
      setTimeout(() => {
        obs.next('Ido');
      }, 2000);
      setTimeout(() => {
        obs.next('Ido');
      }, 3000);
    });
    return this.data;
  }

  makeApiRequest() {
    return this.http.get(this.url);
  }
}
