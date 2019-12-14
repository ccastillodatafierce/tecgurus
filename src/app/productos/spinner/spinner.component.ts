import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit, OnChanges {

  @Input() mostrar: boolean;

  message: string;


  constructor() {

  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur = JSON.stringify(chng.currentValue);


      let prev = JSON.stringify(chng.previousValue);

      if(chng.currentValue){
        this.message="Termino exitosamente";
      }

      console.log("previo", prev);
      console.log("actual", cur);

    }
  }

}
