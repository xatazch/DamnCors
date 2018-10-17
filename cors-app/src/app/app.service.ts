import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

 
  async callService() {
    let response = await fetch('https://localhost:44357/api/values', {
      method: 'post',
      body: "test"
  });

    alert(response)
  }
 
  async GetStuff() {
    let response = await fetch('https://localhost:44357/api/values', {
      method: 'get'
  });

    alert(response)
  }
}
