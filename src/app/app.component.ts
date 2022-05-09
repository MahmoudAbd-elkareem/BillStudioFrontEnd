import { Component, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BillStudioProject';

  constructor(private translateService : TranslateService , private renderer: Renderer2) {


  }
ngOnInit(): void {
  // this.setDefautLanguage();
}

  // private setDefautLanguage(): void {
  //   let lang: string = localStorage.getItem("lang") ?? "ar";
  //   localStorage.setItem("lang", lang);
  //   this.translateService.setDefaultLang(lang);
  //   this.translateService.use(lang).subscribe(() => {
  //   });

  //   this.changeHtmlAttr(lang.toLocaleLowerCase().includes("ar"));
  // }

  // private changeHtmlAttr(isRtl: boolean): void {
  //   if (isRtl) {
  //     this.renderer.addClass(document.querySelector("body"), "rtl");
  //     this.renderer.removeClass(document.querySelector("body"), "ltr");
  //     this.renderer.setAttribute(document.querySelector("html"), "lang", "ar");
  //     //this.renderer.setAttribute(document.querySelector("html"), "dir", "rtl");
  //   } else {
  //     this.renderer.addClass(document.querySelector("body"), "ltr");
  //     this.renderer.removeClass(document.querySelector("body"), "rtl");
  //     this.renderer.setAttribute(document.querySelector("html"), "lang", "en");
  //     //this.renderer.setAttribute(document.querySelector("html"), "dir", "ltr");
  //   }
  // }
}
