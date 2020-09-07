import { Component, OnInit } from '@angular/core';
import{ Document} from './models/Document';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  public docs:Document[]

  constructor() { 
  }


  ngOnInit(): void {
    this.docs = [
      {
        id: "slm",
        content: "a;dfkjad;faksdjfsa"
      },
      {
        id: "slm",
        content: "helbwemrnew,mrnwe.rmwenrewmqlo"
      },
      {
        id: "slm",
        content: "heocixuv;xckvjastkeste afsd;fsjd  dfkdsfj asfk js;adkjsda ;kj;dfllo"
      },
      {
        id: "slm",
        content: "a;d fkasdj ak j;k jd; kj;kjf;ksd jfs"
      },
      {
        id: "slm",
        content: "a;dkfj sd;j fsad; kjfs;dkjsd;f j;kj;kj; j "
      }
    ];
  }

}
