import { Component, OnInit,Output, Input,EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: '[app-test]',
  template: `<h2>Welcome {{name}}</h2>
            <p>{{2+2}}</p>
            <p>{{"Welcome "+ name}}</p>
            <p>{{name.length}}</p>
            <p>{{name.toUpperCase()}}</p>
            <p>{{greetuser()}}</p>
            <p>{{siteurl}}</p>
            <input [id]="myId" type="text" value="sooraj">
            <p [class.text-error]="hasError">{{name}}</p>
            <p [ngClass]="messageClasses">Condition Classes</p>
            <p [style.color]="'orange'">Inline Color</p>
            <p [style.color]="hasError ? 'green' : 'red' ">Style Binding 1</p>
            <p [style.color]="highlightcolor">Style Binding 2</p>
            <p [style.color]="highlightcolor">Style Binding 3</p>
            <p [ngStyle]="myclass">Style Binding 4</p>
            <p><button (click)="onclick()">Click Here</button></p>

            <p><button (click)="onclicks($event)">Check Event</button>{{greeting}}</p>


            <p><input #myInput type="text">
            <button (click)="logMessage(myInput.value)">Template Variable</button></p>


            <p> Two Way Binding </p>
            <p><input [(ngModel)]="username" type="text">{{username}}</p>


            <h2>{{parentData}}</h2>

            <button (click)="fireEvent()">Send Event</button>

            `,
  styles: [`
  p {
    float:left;
    width: 100%;
    margin: 1px;
  }
  .text-error{
    color: red;
  }
  .text-success{
    color : green;
  }
  .text-special{
    font-style : italic;
  }
  `]
})
export class TestComponent implements OnInit {



  @Input() public parentData;


  @Output() public childEvent = new EventEmitter(); 

  public name= "Sooraj";
  
  public username= "";

  public myId = "testid"
  public siteurl = window.location.href;
  public greeting = "";
  public hasError = true;
  public isSpecial =true;
  public messageClasses = {
    "text-error": this.hasError,
    "text-success": !this.hasError,
    "text-special": this.isSpecial
  }

  public highlightcolor = "pink";

  public myclass = {
    
    color: "Blue",
    fontStyle: "Italic"
  };


  constructor() { }

  ngOnInit() {
  }

  greetuser(){
    return "Hello " + this.name;
  }

  onclick(){
    console.log("Button Clicked");
  }

  onclicks(event){
    console.log(event);
    this.greeting = event.type;
  }

  logMessage(value){
    console.log(value);
  }


  fireEvent(){
    this.childEvent.emit('Hey Sooraj');
  }


}
