import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
;
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DateAdapter,MAT_DATE_FORMATS,MAT_DATE_LOCALE } from '@angular/material/core';
import {MaterialPersianDateAdapter,PERSIAN_DATE_FORMATS} from './persian-dateadapter';
import { LayoutComponent } from './layout/layout.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { MessageService } from 'primeng/api';




@NgModule({
  declarations: [
    AppComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [{
    provide:DateAdapter,useClass:MaterialPersianDateAdapter,deps:[MAT_DATE_LOCALE],
  },{
    provide:MAT_DATE_FORMATS,useValue:PERSIAN_DATE_FORMATS
  },
 {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,  // خیلی مهم که multi:true باشه
    },
  MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
