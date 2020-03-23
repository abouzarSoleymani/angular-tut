import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoadingComponent} from './loading/loading.component';
import {AutoCompleteComponent} from './auto-complete/auto-complete.component';
import {TestJSComponent} from './test-js/test-js.component';
import {FileUploadComponent} from './file-upload/file-upload.component';
import {RxjsComponent} from './rxjs/rxjs.component';
import {MagnifierComponent} from './magnifier/magnifier.component';
import {HoverBtnComponent} from './hover-btn/hover-btn.component';
import {TemplateComponent} from './template/template.component';
import {ReactiveFormScrollComponent} from './reactive-form-scroll/reactive-form-scroll.component';
import {JsonServerComponent} from './json-server/json-server.component';

const routes: Routes = [
  { path: 'loading', component: LoadingComponent},
  { path: 'complete', component: AutoCompleteComponent},
  { path: 'testJS', component: TestJSComponent},
  { path: 'upload', component: FileUploadComponent},
  { path: 'rxjs', component: RxjsComponent},
  { path: 'magnifier', component: MagnifierComponent},
  { path: 'h-btn', component: HoverBtnComponent},
  { path: 'reactive-form', component: ReactiveFormScrollComponent},
  { path: 'temp', component: TemplateComponent},
  { path: 'json', component: JsonServerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
