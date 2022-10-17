import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  saluda(): string{
    return 'HOLA MUNDO';
  }


}
