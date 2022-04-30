import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  userDto : User = {
    name:"",
    phoneNumber:0,
    studios:[],
    city:"",
    country:"",
    email:"",
    gender:"",
  }


  buildCompleteForm(){

    this.completeform = new FormGroup({
      UserName: new FormControl('' , Validators.required),
      PhoneNumber: new FormControl('', Validators.compose([Validators.required ,Validators.pattern(RegexPatterns.KSAcellNumber)])),
      City: new FormControl('', Validators.required),
      Country: new FormControl('', Validators.required),
      Email: new FormControl('' , Validators.compose([Validators.required ,Validators.pattern(RegexPatterns.Email)])),
      Gender: new FormControl('' , Validators.required),
      StudioType: new FormControl(''),
      StudioAdress: new FormControl(''),

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

  constructor(private notifier:NotifierService,private service :ServicesService ,private toastr: ToastrService) { }



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
     this.hasStudio?
     this.userDto.studios.push({
       adress:this.completeform.value.StudioAdress,
       studioType:this.completeform.value.StudioType
     }) : this.userDto.studios = []
   this.service.addUser(this.userDto).subscribe(
     res=>{
      this.DeactivateModal.hide()
      this.completeform.reset()
      this.notifier.notify('success', "تم تسجيل الإستديو بنجاح");
      this.hasStudio = false
      this.userDto= {
        name:"",
        phoneNumber:0,
        studios:[],
        city:"",
        country:"",
        email:"",
        gender:"",
      }
     }
   )

  }

}
