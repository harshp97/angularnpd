import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { ClarityModule } from '@clr/angular';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { SearchComponent } from './search/search.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { SelerComponent } from './seler/seler.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { Group2Component } from './group2/group2.component';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { FormlyFieldTypeahead } from './group2/types/typeahead.type.component';
import { GroupSearchComponent } from './group-search/group-search.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { DataGrComponent } from './data-gr/data-gr.component';
import { ModalGridComponent } from './modal-grid/modal-grid.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { FormlySearchFieldTypeahead } from './modal-grid/searchpo/typeaheadsearch.type.component';
import { ModalGridDelComponent } from './modal-grid-del/modal-grid-del.component';


const appearance: MatFormFieldDefaultOptions = {
  appearance: 'outline'
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    SearchComponent,
    SelerComponent,
    Group2Component,
    FormlyFieldTypeahead,
    GroupSearchComponent,
    DataGrComponent,
    ModalGridComponent,
    FormlySearchFieldTypeahead,
    ModalGridDelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    NgbModule,
    ClarityModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    NgSelectModule,
    NgMultiSelectDropDownModule.forRoot(),
    ReactiveFormsModule,
    MatTabsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,
    FormlyModule.forRoot({ 
      types: [
        { name: 'typeahead', component: FormlyFieldTypeahead },
        { name: 'typeaheadser', component: FormlySearchFieldTypeahead }
      ],
      validationMessages:[
          { name: 'required', message: 'This field is required' },    
      ],
     }),
    FormlyBootstrapModule,
    FormlyMaterialModule,
    FormlyModule,
    MatToolbarModule,
    MatSidenavModule,
    RouterModule,
    MatDialogModule
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: appearance
    }
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
