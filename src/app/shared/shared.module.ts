import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutBtnComponent } from './components/logout-btn/logout-btn.component';
import { LoginBtnComponent } from './components/login-btn/login-btn.component';
import { LoginDirective } from './directives/login.directive';
import { LoginPipe } from './pipes/login.pipe';
import { CommonShellComponent } from './components/common-shell/common-shell.component';
import { SharedRoutingModule } from './shared-routing.module';



@NgModule({
  declarations: [
    // LogoutBtnComponent,
    // LoginBtnComponent,
    // LoginDirective,
    // LoginPipe,
    CommonShellComponent
  ],
  imports: [
    CommonModule, SharedRoutingModule
  ]
})
export class SharedModule { }
