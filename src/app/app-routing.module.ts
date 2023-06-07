import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {path:'crud', component:CrudComponent},
  {path:'table', component:TableComponent},
  {path:'crud', component:TableComponent},
  {path:'crud/:id', component:CrudComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
