import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonShellComponent } from './components/common-shell/common-shell.component';
import { LecturerComponent } from '../features/lecturers/pages/lecturer/lecturer.component';
import { LandingPageComponent } from '../features/landing/pages/landing-page/landing-page.component';
import { StudentComponent } from '../features/students/pages/student/student.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../features/landing/landing.module').then(m => m.LandingModule)
  },
  {
    path: 'students',
    loadChildren: () => import('../features/students/students.module').then(m => m.StudentsModule)
  },
  {
    path: 'lecturer',
    component: LecturerComponent,
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
