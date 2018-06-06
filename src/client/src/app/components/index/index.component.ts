import { Component, OnInit } from '@angular/core';
import { ValuesService } from '../../services/values.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  values: any;

  constructor(private valuesService: ValuesService) { }

  ngOnInit() {
    this.valuesService.getValues()
      .subscribe(values => this.values = values);
  }

}
