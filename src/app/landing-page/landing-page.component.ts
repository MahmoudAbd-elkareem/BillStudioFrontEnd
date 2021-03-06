import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { NotifierService } from 'angular-notifier';
import { ToastrService } from 'ngx-toastr';
import { User } from '../Model/model';
import { ServicesService } from '../Services/services.service';
import { RegexPatterns } from './Constants/app-constants';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  @ViewChild("DeactivateModal")  DeactivateModal

  completeform: FormGroup;
  userDto : User =new User()
  languageName :string = "English"
  language = this.translateService.currentLang;
  cities= ["الرياض"
  ,"جدة"
  ,"المدينة المنورة"
  ,"تبوك"
  ,"الدمام"
  ,"الاحساء"
  ,"القطيف"
  ,"خميس مشيط"
  ,"المظيلف"
  ,"الهفوف"
  ,"المبرز"
  ,"الطائف"
  ,"نجران"
  ,"حفر الباطن"
  ,"الجبيل"
  ,"ضباء"
  ,"الخرج"
  ,"الثقبة"
  ,"ينبع البحر"
  ,"الخبر"
  ,"غرغر"
  ,"الحوية"
  ,"عنيزة"
  ,"سكاكا"
  ,"جيزان"
  ,"القريات"
  ,"الظهران"
  ,"الباحة"
  ,"الزلفي"
  ,"الرس"
  ,"وادي الدواسر"
  ,"بيشة"
  ,"سيهات"
  ,"شروره"
  ,"بحره"
  ,"تاروت"
  ,"الدوادمي"
  ,"صبياء"
  ,"بيش"
  ,"احد رفيدة"
  ,"الفريش"
  ,"بارق"
  ,"الحوطة"
  ,"الافلاج"]


  buildCompleteForm(){

    this.completeform = new FormGroup({
      UserName: new FormControl('' , Validators.required),
      PhoneNumber: new FormControl('', Validators.compose([Validators.required ,Validators.pattern(RegexPatterns.KSAcellNumber)])),
      City: new FormControl('', Validators.required),
      Country: new FormControl('', Validators.required),
      Email: new FormControl('' , Validators.compose([Validators.required ,Validators.pattern(RegexPatterns.Email)])),
      Gender: new FormControl('' , Validators.required),
      StudioType: new FormControl(''),
      hasStudio: new FormControl(false),
      StudioAdress: new FormControl(''),
      StudioName: new FormControl(''),
    });
  }
hasStudio : boolean
  toggleEditable(event){
    if ( event.target.checked ) {
      this.hasStudio = true;
 }else{
  this.hasStudio = false;
 }
  }

  changeLanaguage(chosedlang : string) {
    this.translateService.use(chosedlang);
  }

  constructor(  public translateService: TranslateService,private notifier:NotifierService,private service :ServicesService ,private toastr: ToastrService) { }



  ngOnInit(): void {
    this.buildCompleteForm()
  }
  AddUser(){
     this.userDto.name =this.completeform.value.UserName,
     this.userDto.phoneNumber=this.completeform.value.PhoneNumber,
     this.userDto.city =this.completeform.value.City,
     this.userDto.country =this.completeform.value.Country,
     this.userDto.email=this.completeform.value.Email,
     this.userDto.gender=this.completeform.value.Gender,
     this.userDto.studioName =this.completeform.value.StudioName
     this.completeform.value.StudioAdress?
     this.userDto.studios=[{
      adress:this.completeform.value.StudioAdress,
      studioType:this.completeform.value.StudioType
     }] : this.userDto.studios = []
   this.service.addUser(this.userDto).subscribe(
     res=>{
      this.DeactivateModal.hide()
      this.completeform.reset()
      this.notifier.notify('success', "تم تسجيل الإستديو بنجاح");
      this.hasStudio = false;
      this.userDto.studios = []
     }
   )

  }

}
