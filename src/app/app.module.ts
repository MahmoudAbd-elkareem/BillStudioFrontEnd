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
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    ModalModule,
    RouterModule.forRoot([]),
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
      ),
      TranslateModule.forRoot({
        defaultLanguage: 'ar',
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
      NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
