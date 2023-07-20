import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { StudentsComponent } from './features/components/students/students.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    StudentsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
