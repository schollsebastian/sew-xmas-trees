import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { TreeComponent } from "./tree/tree.component";
import { SaleComponent } from './sale/sale.component';

const routes: Routes = [
  { path: 'tree', component: TreeComponent },
  { path: 'sale', component: SaleComponent },
  { path: '**', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
