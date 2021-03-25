import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { TodosCompletedComponent } from './components/todos-completed/todos-completed.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'todo-completed', component: TodosCompletedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
