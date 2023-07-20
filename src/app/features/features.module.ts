import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './components/students/students.component';
import { LecturerComponent } from './lecturers/components/lecturer/lecturer.component';
import { LecturerCardComponent } from './lecturers/components/lecturer-card/lecturer-card.component';
import { ComponentsComponent } from './lecturers/components/components.component';
import { IndivLecturerComponent } from './lecturers/pages/indiv-lecturer/indiv-lecturer.component';



@NgModule({
  declarations: [
    StudentsComponent,
    LecturerComponent,
    LecturerCardComponent,
    ComponentsComponent,
    IndivLecturerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FeaturesModule { }
