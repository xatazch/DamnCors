import { Component } from '@angular/core';
import { AppService } from  '../app/app.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'cors-app';
  constructor(private appService: AppService) { 
    console.log("Getting Stuff")
    this.appService.GetStuff();
  }



  onClickMe() {
   this.appService.callService()
  }
}
