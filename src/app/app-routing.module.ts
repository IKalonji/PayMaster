import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SubmitPaymasterComponent } from './submit-paymaster/submit-paymaster.component';
import { SearchPaymasterComponent } from './search-paymaster/search-paymaster.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: HomeComponent
  },
  {
    path: "submit-paymaster",
    pathMatch: "full",
    component: SubmitPaymasterComponent
  },
  {
    path: "search-paymaster",
    pathMatch: "full",
    component: SearchPaymasterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
