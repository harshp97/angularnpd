import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }
  dropdownList = [];
  selectedItems = [];
  dropdownSettings:IDropdownSettings;
  
  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: '2022' },
      { item_id: 2, item_text: '2021' },
      { item_id: 3, item_text: '2020' },
      { item_id: 4, item_text: '2019' },
      { item_id: 5, item_text: '2018' },
      { item_id: 5, item_text: '2017' }
    ];
    this.selectedItems = [
     
    ];
    this.dropdownSettings = {
      singleSelection:true,
      idField: 'item_id',
      textField: 'item_text',
      itemsShowLimit: 1,
      allowSearchFilter: true,
      searchPlaceholderText: 'Search here'
    };
  }
  
  onItemSelect(item: any) {
    console.warn(item);
  }
  
}
