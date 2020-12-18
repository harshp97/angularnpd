import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";

@Component({
  selector: 'app-group2',
  templateUrl: './group2.component.html',
  styleUrls: ['./group2.component.css']
})

export class Group2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  form = new FormGroup({});
  model: any = {};

  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-3',
          type: 'select',
          key: 'planYear',
          templateOptions: {
            label: 'Plan Year',
            options: [

              { label: "2021", value: "101" },
              { label: "2020", value: "102" },
              { label: "2019", value: "103" },
              { label: "2018", value: "104" },
              { label: "2017", value: "105" }
            ],
            placeholder: "Select Plan Year",
            required: true
            
          },
          
        },
        {
          className: 'col-3',
          type: 'select',
          key: 'planOption',
          templateOptions: {
            label: 'Plan Option',
            options: [
              { label: "079/123", value: "101" },
              { label: "079/1234", value: "102" },
              { label: "079/12345", value: "103" }

            ],
            placeholder: "Select Plan Year",
            required: true

          },
          expressionProperties: {
            'templateOptions.disabled': '!model.planYear', 
          },
        },
        {
          className: 'col-3',
          type: 'select',
          key: 'loadType',
          templateOptions: {
            label: 'Load Type',
            options: [
              { label: "Model", value: "101" },
              { label: "Partial", value: "102" },
              { label: "Scratch", value: "103" }
            ],
           
            required: true
          },
          expressionProperties: {
            'templateOptions.disabled': '!model.planOption', 
          },
        },
        {
          className: 'col-3',
          type: 'select',
          key: 'basePlan',
          templateOptions: {
            label: 'Base Plan',
            options: [
              { label: "079/123", value: "101" },
              { label: "079/1234", value: "102" },
              { label: "079/12345", value: "103" }
            ],
            placeholder: "Select Base Plan",
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
          type: 'select',
          key: 'primaryNetworkPhysician',
          templateOptions: {
            label: 'Primary Network Physician',
            options: [
              { label: "2682", value: "101" },
              { label: "2738", value: "102" },
              { label: "2887", value: "103" },
              { label: "2899", value: "104" },
              { label: "2910", value: "105"}
            ],
            placeholder: "Select",
            required: false
          },
          
        },
        {
          className: 'col-3',
          type: 'select',
          key: 'primaryNetworkFacility',
          templateOptions: {
            label: 'Primary Network Facility',
            options: [
              { label: "8138", value: "101" },
              { label: "8287", value: "102" },
              { label: "8299", value: "103" },
              { label: "8310", value: "104" },
              { label: "8682", value: "105"}

            ],
            placeholder: "Select",
            required: false

          },
          
        },
        {
          className: 'col-3',
          type: 'select',
          key: 'secondaryNetworkPhysician',
          templateOptions: {
            label: 'Secondary Network Physician ',
            options: [
              { label: "2682", value: "101" },
              { label: "2738", value: "102" },
              { label: "2887", value: "103" },
              { label: "2899", value: "104" },
              { label: "2910", value: "105" }
            ],
            placeholder: "Select",
            required: false
          },
          
        },
        {
          className: 'col-3',
          type: 'select',
          key: 'secondaryNetworkFacility',
          templateOptions: {
            label: 'Secondary Network Facility',
            options: [
              { label: "8138", value: "101" },
              { label: "8287", value: "102" },
              { label: "8299", value: "103" },
              { label: "8310", value: "104" },
              { label: "8682", value: "105" }
            ],
            placeholder: "Select",
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
          className:'col-3',
          key: 'planOwner',
          type: 'input',
          templateOptions: {
            label: 'Plan Owner',
            placeholder: 'Owner',
            required: true,
          },
        },
        {
          className: 'col-3',
          type: 'select',
          key: 'state',
          templateOptions: {
            label: 'State',
            options: [
              { label: "AB", value: "101" },
              { label: "AC", value: "102" },
              { label: "AD", value: "103" },
              { label: "AE", value: "104" }
            ],
            placeholder: "Select",
            required: false
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
  resetAlert(){
    alert('reset');
  }
  cancelAlert(){
    alert('canceled');
  }
}
