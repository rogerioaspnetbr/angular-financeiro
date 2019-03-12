import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{path: '', component: CategoryListComponent},
{path: 'new', component: CategoryFormComponent},
{path: ':id/edit', component: CategoryFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }


//nome-site.com.br/categories => list (master)
//nome-site.com.br/categories/new => form (detail)
//nome-site.com.br/categories/:id/edit => form (detail)
