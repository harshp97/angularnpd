import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebComponent } from './sideb/sideb.component';
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



const appearance: MatFormFieldDefaultOptions = {
  appearance: 'outline'
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebComponent,
    FooterComponent,
    ContentComponent,
    SearchComponent,
    SelerComponent,
    Group2Component
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
    FormlyModule.forRoot({ 
      
      validationMessages:
       [{ name: 'required', message: 'This field is required' },    
        ],
        
     }),
    FormlyBootstrapModule,
    FormlyMaterialModule,
    FormlyModule
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: appearance
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
