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
import {ThemeDarkComponent} from './darkMode/theme-dark/theme-dark.component';
import {ThemeContainerComponent} from './darkModeSimple/theme-container/theme-container.component';
import {SidebarSwipeComponent} from './sidebar-swipe/sidebar-swipe.component';
import {FormUserSearchComponent} from './form-user-search/form-user-search.component';
import {TableAddRemoveComponent} from './table-add-remove/table-add-remove.component';
import {GoogleAuthComponent} from './google-auth/google-auth.component';

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
  { path: 'dark', component: ThemeDarkComponent},
  { path: 'theme', component: ThemeContainerComponent},
  { path: 'swipe', component: SidebarSwipeComponent},
  { path: 'search', component: FormUserSearchComponent},
  { path: 'table', component: TableAddRemoveComponent},
  { path: 'google', component: GoogleAuthComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
