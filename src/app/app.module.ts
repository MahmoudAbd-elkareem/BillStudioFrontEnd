import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NotifierModule } from 'angular-notifier';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    ModalModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NotifierModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    NotifierModule.withConfig(
      {
        position: {
          vertical: { position:"top" , distance:80},
          horizontal: { position: "middle"}
        },
        // animations :{ enabled:true },
        // theme:"material design"
      }
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
