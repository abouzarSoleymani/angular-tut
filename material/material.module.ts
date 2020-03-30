import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule, MatChipsModule,
  MatDatepickerModule,
  MatFormField, MatFormFieldModule,
  MatGridListModule,
  MatIconModule, MatInputModule, MatMenuModule, MatNativeDateModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatMenuModule
  ],
  exports: [
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatChipsModule,
    MatNativeDateModule,
    MatInputModule,
    MatMenuModule
  ],
  providers: [MatDatepickerModule]
})
export class MaterialModule { }
