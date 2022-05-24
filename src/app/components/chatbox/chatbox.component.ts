import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // when clear chat button is pressed, it will loop through the mat list element and clear all child elements within.
  onClick() {
    var e = document.querySelector("mat-list");
    if (e != null) {
      var child = e.lastElementChild;
      while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
      }
    }
  }

}
