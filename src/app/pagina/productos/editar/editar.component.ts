import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ParamMap
} from '@angular/router';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  id: string;

  constructor(private route: ActivatedRoute) {

    this.id = this.route.snapshot.paramMap.get('id');
    console.log("MI ID", this.id);

  }

  ngOnInit() {
  	
  }

}
