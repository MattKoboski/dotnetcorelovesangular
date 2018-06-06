import { Component, OnInit } from '@angular/core';
import { ValuesService } from '../../services/values.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  result: any;
  values: any;
  data: any = {
    value: ''
  };
  constructor(private valuesService: ValuesService) { }

  ngOnInit() {
    this.valuesService.getValues()
      .subscribe(values => this.values = values);
  }

  submit() {
    this.valuesService.create(this.data)
      .subscribe(result => {
        this.result = result;
        console.log(result);
      });
  }

  delete() {
    this.valuesService.delete("data")
    .subscribe(result => {
      this.result = result;
      console.log(result);
    });
  }

}
