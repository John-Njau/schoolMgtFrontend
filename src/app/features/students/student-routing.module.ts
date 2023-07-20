import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './pages/student/student.component';
import { StudentCardComponent } from './components/student-card/student-card.component';

const routes: Routes = [
  {
    path: '',
    component: StudentComponent,
  },
  {
    path: ':id',
    component: StudentCardComponent,
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
