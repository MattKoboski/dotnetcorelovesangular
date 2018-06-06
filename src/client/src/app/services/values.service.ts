import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class ValuesService {

  private readonly valuesEndpoint = 'api/values/';

  constructor(
    private http: HttpClient,
    private authHttp: AuthHttp
  ) { }

  getValues() {
    return this.http.get(this.valuesEndpoint);
  }

  create(value) {
    return this.authHttp.post(this.valuesEndpoint, value);
  }

  getValue(id) {
    return this.http.get(this.valuesEndpoint + id);
  }

  update(id, value) {
    return this.authHttp.put(id, value);
  }

  delete(id) {
    return this.authHttp.delete(this.valuesEndpoint + id);
  }
}
