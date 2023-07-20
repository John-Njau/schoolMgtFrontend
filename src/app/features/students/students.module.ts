import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './pages/student/student.component';
import { StudentCardComponent } from './components/student-card/student-card.component';
import { StudentRoutingModule } from './student-routing.module';



@NgModule({
  declarations: [
    StudentComponent,
    StudentCardComponent,
  ],
  imports: [
    CommonModule, StudentRoutingModule
  ]
})
export class StudentsModule { }
