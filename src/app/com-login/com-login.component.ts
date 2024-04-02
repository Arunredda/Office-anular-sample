import { Component, OnInit } from '@angular/core';
import { Loginbo } from '../loginbo';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { RespoceBO } from '../respoce-bo';
import { Router } from '@angular/router';
import { TockenIntersaptorService } from '../tocken-intersaptor.service';

@Component({
  selector: 'app-com-login',
  templateUrl: './com-login.component.html',
  styleUrls: ['./com-login.component.css']
})
export class ComLoginComponent implements OnInit {

  // inputsss:String="Input Dec";

  loginbo: Loginbo = new Loginbo();

  respoceBO: RespoceBO = new RespoceBO;

  loginForm: FormGroup = new FormGroup({});

  message: String | any;

  

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router, private tockenIntersaptorService: TockenIntersaptorService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: [''],
      passWord: ['']
    })
    sessionStorage.removeItem("role")
  }

  login() {

    debugger;
    this.loginbo.userName = this.loginForm.value.userName
    this.loginbo.passWord = this.loginForm.value.passWord

    this.loginService.checkLogin(this.loginbo).subscribe(
      
      (data => {



       
      this.respoceBO = data;
      this.message = this.respoceBO.message;

      console.log(this.respoceBO.role)
      // this.tockenIntersaptorService.addTocken(this.respoceBO)

      //sessionStorage.setItem("jwbTocken", this.respoceBO.jwbTocken)
      localStorage.setItem("jwbTocken",this.respoceBO.jwbTocken);

      console.log("AF --"+this.respoceBO.jwbTocken)
      
      sessionStorage.setItem("role", this.respoceBO.role)
      this.router.navigate(['welcome'])

    }),
    (error =>{
      this.respoceBO = error;
      this.message = 'User Not Found';

      console.log(this.message)
      console.log("eoorr")
    })
    )

  }

}
