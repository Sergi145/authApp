import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import Swal from 'sweetalert2';
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrl: './page-login.component.css'
})
export class PageLoginComponent {
    private fb = inject(FormBuilder);
    private authService = inject(AuthService);
    private router = inject(Router);

    public myForm:FormGroup = this.fb.group({
      email:['fernando@google.com',[Validators.required,Validators.email]],
      password:['123456',[Validators.required,Validators.minLength(6)]],

    })

    login () {

      const {email,password} = this.myForm.value;

      this.authService.login(email,password)
        .subscribe({
            next: ()=> this.router.navigateByUrl('/dashboard'),
            error: (error) => {
              Swal.fire('Error', error)
            }
          })
    }
}