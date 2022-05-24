import { Component } from '@angular/core';
import {Person} from "@angular/cli/utilities/package-json";
import {PersonComponent} from "./components/person/person.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'chatapp';
  //start with a single person component rendered
  public loadComponent: any[] = [1];

  // when button is pressed a new person component is applied to the div and limited to max 9
  onClick(){
    const theText = document.getElementById((this.loadComponent.length).toString()) as HTMLInputElement;
    if(this.loadComponent.length < 9)
    this.loadComponent.push(theText);
  }




}
