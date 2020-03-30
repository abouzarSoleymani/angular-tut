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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TemplateComponent } from './template/template.component';
import { TestTemplateComponent } from './test/test-template.component';
import { SmoothScrollComponent } from './smooth-scroll/smooth-scroll.component';
import { JsonServerComponent } from './json-server/json-server.component';
import { ThemeDarkComponent } from './darkMode/theme-dark/theme-dark.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import { ToolbarComponent } from './darkMode/toolbar/toolbar.component';
import { SidenavComponent } from './darkMode/sidenav/sidenav.component';
import {SidenavService} from './darkMode/sidenav.service';
import {ThemingService} from './darkMode/theming.service';
import { ThemeContainerComponent } from './darkModeSimple/theme-container/theme-container.component';
import {ThemeModule} from './darkModeSimple/theme.module';
import {lightTheme} from './darkModeSimple/light-theme';
import {darkTheme} from './darkModeSimple/dark-theme';
import { SidebarSwipeComponent } from './sidebar-swipe/sidebar-swipe.component';
import {SidebarSwipeService} from './sidebar-swipe/sidebar-swipe.service';
import {OpenSidebarOnSwipeDirective} from './sidebar-swipe/open-sidebar-on-swipe.directive';
import { FormUserSearchComponent } from './form-user-search/form-user-search.component';
import {HttpClientModule} from '@angular/common/http';
import { TableAddRemoveComponent } from './table-add-remove/table-add-remove.component';
import { GoogleAuthComponent } from './google-auth/google-auth.component';
import { LoginComponent } from './google-auth/login/login.component';
import {FacebookLoginProvider, GoogleLoginProvider} from './google-auth/module/providers';
import {AuthService, AuthServiceConfig} from './google-auth/module/auth.service';

export function socialConfigs() {
  const config = new AuthServiceConfig(
    [
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider('282577308941815')
      },
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider('482048794815-n743oh6au9f82mqrqu2dnnq85fcbt5vh.apps.googleusercontent.com')
      }
    ]
  );
  return config;
}
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
    ThemeDarkComponent,
    ToolbarComponent,
    SidenavComponent,
    ThemeContainerComponent,
    SidebarSwipeComponent,
    OpenSidebarOnSwipeDirective,
    FormUserSearchComponent,
    TableAddRemoveComponent,
    GoogleAuthComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ThemeModule.forRoot({
      themes: [lightTheme, darkTheme],
      active: 'light'
    })
  ],
  exports: [MaterialModule],
  providers: [ThemingService, SidenavService, SidebarSwipeService,
    AuthService,
    {
      provide: AuthServiceConfig,
      useFactory: socialConfigs
    }  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
