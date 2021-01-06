import { Component, OnInit, ViewChild} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { ClrDatagrid } from "@clr/angular";
import { of as observableOf } from 'rxjs/observable/of';

const planYear = ['2021', '2020', '2019', '2018', '2017', '2016'];

const planOption = ['73/023','079/124', '079/125'];


@Component({
  selector: 'app-group-search',
  templateUrl: './group-search.component.html',
  styleUrls: ['./group-search.component.css'],
})
export class GroupSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  form = new FormGroup({});
  model: any = {};
  options = {};

  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-3',
          type: 'typeahead',
          key: 'planYear',
          templateOptions: {
          label: 'Plan Year',
          search$: (term) => {
            if ((!term || term === '')) {
              return observableOf(planYear);
            }
            return observableOf(planYear.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));
          },  
          placeholder: "Select Plan Year",
          required: true
          },
        },
        {
          className: 'col-3',
          type: 'typeahead',
          key: 'planOption',
          templateOptions: {
            label: 'Plan Option',
            search$: (term) => {
              if ((!term || term === '')) {
                return observableOf(planOption);
              }
              return observableOf(planOption.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));
            }, 
            placeholder: "Select Plan Option",
            required: true
          },
          expressionProperties: {
            'templateOptions.disabled': '!model.planYear', 
          },
        },
        {
          className: 'col-3',
          type: 'typeaheadser',
          key: 'search',
          expressionProperties: {
            'templateOptions.disabled': '!model.planOption', 
          },
        },
      ],
    },
   
    { template: '<hr />' },
    
  ];

  submit() {
    alert(JSON.stringify(this.model));
  }

}
