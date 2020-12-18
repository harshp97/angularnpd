import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormControl, FormGroup, ReactiveFormsModule, FormsModule} from '@angular/forms';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';

@Component({
  selector: 'app-seler',
  templateUrl: './seler.component.html',
  styleUrls: ['./seler.component.css']
})
export class SelerComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  selectedYear: number;
 
  year = [
      { id: 1, label: '2021' },
      { id: 2, label: '2020' },
      { id: 3, label: '2019' },
      { id: 4, label: '2018' },
  ];

}
