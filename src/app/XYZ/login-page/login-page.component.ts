import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  objLogin:any = {
    User_Id : "",
    Password : "",
  }  

  constructor(
    public dialogRef: MatDialogRef<LoginPageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public _router : Router) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    if(this.beforeLoginValidate()){
    this.dialogRef.close();
    }
  }

  public beforeLoginValidate():boolean {
    debugger;
    if(this.objLogin.User_Id === ''){
      alert("Enter User Id");
      return false;
    }else if(this.objLogin.User_Id !== 'abc@media.com' && this.objLogin.User_Id !== 'def@media.com'){
      alert("Enter Valid User Id");
      return false;
    }else if(this.objLogin.Password === ''){
      alert("Enter Password");
      return false;
    }else if(this.objLogin.User_Id === 'abc@media.com' && this.objLogin.Password !== 'abc123'){
      alert("Enter Valid Password");
      return false;
    }else if(this.objLogin.User_Id === 'def@media.com' && this.objLogin.Password !== 'def123'){
      alert("Enter Valid Password");
      return false;
    }else if(this.objLogin.User_Id === 'abc@media.com' && this.objLogin.Password === 'abc123'){
      this._router.navigateByUrl("/Gallery");
      return true;
    }else if(this.objLogin.User_Id === 'def@media.com' && this.objLogin.Password === 'def123'){
      this._router.navigateByUrl("/Gallery");
      return true;
    }
  }

  onCancelClick(): void {
    this.dialogRef.close();
    }

}
