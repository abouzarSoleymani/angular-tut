import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingComponent } from './loading/loading.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { TestJSComponent } from './test-js/test-js.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { MagnifierComponent } from './magnifier/magnifier.component';
import { HoverBtnComponent } from './hover-btn/hover-btn.component';
import { ReactiveFormScrollComponent } from './reactive-form-scroll/reactive-form-scroll.component';
import {ReactiveFormsModule} from '@angular/forms';
import { TemplateComponent } from './template/template.component';
import { TestTemplateComponent } from './test/test-template.component';
import { SmoothScrollComponent } from './smooth-scroll/smooth-scroll.component';
import { JsonServerComponent } from './json-server/json-server.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    AutoCompleteComponent,
    TestJSComponent,
    FileUploadComponent,
    RxjsComponent,
    MagnifierComponent,
    HoverBtnComponent,
    ReactiveFormScrollComponent,
    TemplateComponent,
    TestTemplateComponent,
    SmoothScrollComponent,
    JsonServerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
