import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-structural-directives]',
  template: `

  <hr>
  <div *ngIf="displayName; else elseblock" >Structural Directives</div>
  
  <ng-template #elseblock>
  <h2> Name is Hidden </h2>
  </ng-template>
  
  <div *ngFor="let color of colors;index as i">
  <p>{{i}} {{color}}</p>
  </div>

  <p>{{name}}</p>
  <p>{{name | lowercase}}</p>
  <p>{{name | uppercase}}</p>
  <p>{{message | titlecase}}</p>
  <p>{{message | slice:3:5}}</p>
  <p>{{person | json }}</p>

  <p>{{5.678 | number:'1.2-3' }}</p>

  <p>{{0.25 | percent }}</p>

  <p>{{0.25 | currency : 'INR':'code' }}</p>
  
  <hr>
  <p>{{date}}</p>
  <p>{{date | date : 'short' }}</p>
  <p>{{date | date : 'shortDate' }}</p>
  <p>{{date | date : 'shortTime' }}</p>
  `,
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {

  public person = {
    "firstname": "Sooraj",
    "lastname": "Vinodan"
    
  }

  public date =new Date();
  public name ="pipes";

  public message ="welcome to my github";

  displayName =false;

  public colors = ["red","blue","yellow"];
  constructor() { }

  ngOnInit() {
  }

}
