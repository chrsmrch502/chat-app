import { Component, OnInit } from '@angular/core';
import { Observable} from "rxjs";

var num = 0;
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  public arrNums: any[] = [];


  constructor() {
  }
  // when initialized it will push a person div to the app html
  // and increase the iteration to create new html tags for the next person component being pushed.
  ngOnInit(): void {
    this.arrNums.push(num);
    num++
  }
  // when the send button is clicked the value of the message is sent to the chat box component
  // that hold a mat-list element.
  onClick(){
    // get button element
    const subWord = document.getElementById(this.changeThings()) as HTMLButtonElement
    //remove the word button from element leaving us with just a number(name of input element)
    // which can be used to iterate the input element
    const updatedText = subWord.id.replace('button','')
    // get the input element id
    const theText = document.getElementById(updatedText) as HTMLInputElement | null;
    // if the input field isnt null or the starter value isnt detected then send
    // the message to chat box component
     if(theText != null && theText.value != 'Enter your message here...') {
      // create a mat list child
       let innerlist = document.createElement("mat-list-item");
       const matlist = document.getElementById('matlist')
      // create an observable that takes the input element as a value
       const observable = new Observable((subscriber) =>{
         subscriber.next(theText)
       });
       // create observer to holds the value of input along with the label
       const observer = {
         next: (value:any) =>{innerlist.innerText = value.name+ ': ' + value.value + '\n'}
       }
       //subscribe to observable
       observable.subscribe(observer)
       //if matlist element exists then append child element mat list item
       if(matlist!=null)
         matlist.appendChild(innerlist);
       //clear the input value after entry and disable button
       theText.value=''
       subWord.disabled = true
    }
  }
  // if the user is typing in the input field then enable the send button else keep disabled
  onKey() {
    const theText = document.getElementById(this.changeThings()) as HTMLInputElement | null;
    const theButton = document.getElementById(('button'+this.changeThings()).toString()) as HTMLButtonElement;
    if(theText != null && theText.value != 'Enter your message here...' && theText.value.trim() != ''){
      theButton.disabled = false;
    }
    else{
      theButton.disabled = true;
    }

  }
  // focuses on the element clicked and returns the id of the element
  public changeThings(){
    var focused = document.activeElement;
    if (!focused || focused == document.body)
      focused = null;
    else if (document.querySelector)
      focused = document.querySelector(":focus");
    if(focused != null) {
      return focused.id
    }
    else {
      return (this.arrNums).toString()
    }
  }
  // if the enter key is pressed in the input element instead of clicking the send button then the message
  // is sent to the chat box component similar to onClick()
  onEnter(){
    const theText = document.getElementById(this.changeThings()) as HTMLInputElement | null;
    const theButton = document.getElementById(('button'+this.changeThings()).toString()) as HTMLButtonElement;
    if(theText != null && theText.value != 'Enter your message here...' && theText.value.trim() != ''){
      let innerlist = document.createElement("mat-list-item");
      const matlist = document.getElementById('matlist')

      const observable = new Observable((subscriber) =>{
        subscriber.next(theText)
      });
      const observer = {
        next: (value:any) =>{innerlist.innerText = value.name+ ': ' + value.value + '\n'}
      }
      observable.subscribe(observer)
      if(matlist!=null)
        matlist.appendChild(innerlist);
      theText.value=''
      theButton.disabled = true
    }
  }


}
