import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";
import { of as observableOf } from 'rxjs/observable/of';

const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
  'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
  'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
  'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

  const planYear = ['2021', '2020', '2019', '2018', '2017', '2016'];

  const planOption = ['73/023','079/124', '079/125'];

  const loadType = ['Modal', 'Partial', 'Scratch'];

  const basePlan = ['073/123', '073/234', '073/546'];
  
  const primaryNetworkPhysician= [ '2682','2872','2985','2755' ];

  const primaryNetworkFacility = ['8645','8965','8012','8099'];

  const secondaryNetworkPhysician= [ '2682','2872','2985','2755' ];
  
  const secondaryNetworkFacility = ['8645','8965','8012','8099'];


@Component({
  selector: 'app-modal-grid',
  templateUrl: './modal-grid.component.html',
  styleUrls: ['./modal-grid.component.css']
})
export class ModalGridComponent implements OnInit {

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
          type: 'typeahead',
          key: 'loadType',
          templateOptions: {
            label: 'Load Type',
            search$: (term) => {
              if ((!term || term === '')) {
                return observableOf(loadType);
              }
              return observableOf(loadType.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));
            },
            placeholder: 'Select Load Type',
            required: true
          },
          expressionProperties: {
            'templateOptions.disabled': '!model.planOption', 
          },
        },
        {
          className: 'col-3',
          type: 'typeahead',
          key: 'basePlan',
          templateOptions: {
            label: 'Base Plan',
            search$: (term) => {
              if ((!term || term === '')) {
                return observableOf(basePlan);
              }
              return observableOf(basePlan.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));
            },
            placeholder: 'Select Base Plan',
            required: false
          },
          expressionProperties: {
            'templateOptions.disabled': '!model.loadType', 
          },
        },
      ],
    },
    {
      template: '<hr />',
    },

    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-3',
          type: 'typeahead',
          key: 'primaryNetworkPhysician',
          templateOptions: {
            label: 'Primary Network Physician',
            search$: (term) => {
              if ((!term || term === '')) {
                return observableOf(primaryNetworkPhysician);
              }
              return observableOf(primaryNetworkPhysician.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));
            },
            placeholder: "Primary Network Physician",
            required: false
          },
        },
        {
          className: 'col-3',
          type: 'typeahead',
          key: 'primaryNetworkFacility',
          templateOptions: {
            label: 'Primary Network Facility',
            search$: (term) => {
              if ((!term || term === '')) {
                return observableOf(primaryNetworkFacility);
              }
              return observableOf(primaryNetworkFacility.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));
            },
            placeholder: "Primary Network Facility",
            required: false
          },
        },
        {
          className: 'col-3',
          type: 'typeahead',
          key: 'secondaryNetworkPhysician',
          templateOptions: {
            label: 'Secondary Network Physician ',
            search$: (term) => {
              if ((!term || term === '')) {
                return observableOf(secondaryNetworkPhysician);
              }
              return observableOf(secondaryNetworkPhysician.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));
            },
            placeholder: "Secondary Network Physician",
            required: false
          },
        },
        {
          className: 'col-3',
          type: 'typeahead',
          key: 'secondaryNetworkFacility',
          templateOptions: {
            label: 'Secondary Network Facility',
            search$: (term) => {
              if ((!term || term === '')) {
                return observableOf(secondaryNetworkFacility);
              }
              return observableOf(secondaryNetworkFacility.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));
            },
            placeholder: "Secondary Network Facility",
            required: false
          },
        },
      ],
    },
    
    {
      template: '<hr />',
    },

    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className:'col-3 ',
          key: 'states',
          type: 'typeahead',
          templateOptions: {
            label: 'State',
            search$: (term) => {
              if ((!term || term === '')) {
                return observableOf(states);
              }
              return observableOf(states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));
            },
            placeholder: 'State(Typeahead)',
          }
        },
        {
          className:'col-3 h-25 ',
          key: 'planOwner(formly)',
          type: 'input',
          templateOptions: {
            label: 'Plan Owner',
            placeholder: 'Owner',
            required: true,
            attributes: {
              style: "color: green"
            }
          },
        },
       
      ],
    },

    { template: '<hr />' },
    {
      key: "customnotes",
      type: "textarea",
      templateOptions: {
        label: "Custom Notes",
        placeholder: " Notes here.......",
        rows: 5,
        required: false,
        attributes: {
          style: "background: white; border-color: green;"
        }
      }
    },
    
  ];

  submit() {
    alert(JSON.stringify(this.model));
  }
  
  cancelAlert(){
    alert('canceled');
  }

}
