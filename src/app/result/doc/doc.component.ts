import { Component, OnInit, Input } from '@angular/core';
import { Document } from '../models/Document';

@Component({
  selector: 'app-docs',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.scss']
})
export class DocComponent implements OnInit {

  @Input()
  public doc:Document;
  
  constructor() {

    console.log("in doc component")  ;
  }

  ngOnInit(): void {
  }

}
