import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import {ReCaptcha2Component} from 'ngx-captcha'
@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.css']
})
export class CaptchaComponent implements OnInit {

  captchaForm:FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    // this.captchaForm = this.formBuilder.group({
    //   recaptcha:['',Validators.required]
    // })
  }

 

}
