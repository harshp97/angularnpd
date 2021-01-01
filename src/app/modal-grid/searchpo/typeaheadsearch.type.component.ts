import { Component, EventEmitter, OnDestroy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators/takeUntil';
import { startWith } from 'rxjs/operators/startWith';
import { filter } from 'rxjs/operators/filter';
import { debounceTime } from 'rxjs/operators/debounceTime';
import { distinctUntilChanged } from 'rxjs/operators/distinctUntilChanged';
import { switchMap } from 'rxjs/operators/switchMap';

@Component({
  selector: 'formly-search-field-typeahead',
  template: `
  <div class="row">
    <!--<ng-select [items]="options$ | async"
      [placeholder]="to.placeholder"
      [typeahead]="search$"
      [multiple]="false"
      appearance="outline"
      [closeOnSelect]="true"
      [formControl]="formControl">
    </ng-select>-->
    <div  class="col-2 ">
      <button type="button" mat-raised-button color="primary" (click)="openbalert()">
       <mat-icon>search</mat-icon>Search
      </button>
    </div>   
    <div style="padding-left: 100px ; hover:cursor">
    <img src="../assets/images/excel.png"  width="50" height="50" alt="" href="#"(click)="openialert()">
    </div>
  </div>
  `,
})
export class FormlySearchFieldTypeahead extends FieldType implements OnDestroy {
  onDestroy$ = new Subject<void>();
  search$ = new EventEmitter();
  options$;

  openbalert(){
    alert('save button works!');
  }

  openialert(){
    alert(' excel works!');
  }

  ngOnInit() {
    this.options$ = this.search$.pipe(
      takeUntil(this.onDestroy$),
      startWith(''),
      filter(v => v !== null),
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(this.to.search$),
    );
    
    this.options$.subscribe();
  }

  ngOnDestroy() {
    this.onDestroy$.complete();
  }
}