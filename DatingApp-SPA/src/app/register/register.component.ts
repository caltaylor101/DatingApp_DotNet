import { Component, OnInit, ɵCompiler_compileModuleSync__POST_R3__, Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { EventEmitter } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(() => {
      this.alertify.success('registration successful');
    }, error => {
      this.alertify.error(error);
    });

  }
  cancel() {
    console.log('cancelled');
  }

}
