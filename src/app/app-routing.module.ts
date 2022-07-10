import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactmeComponent } from './contactme/contactme.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { WhatidoComponent } from './whatido/whatido.component';
import { WhoamiComponent } from './whoami/whoami.component';

const routes: Routes = [
  {path:'',redirectTo:'whoami',pathMatch:'full'},
  {path:'whoami', component:WhoamiComponent},
  {path:'whatido', component:WhatidoComponent},
  {path:'testimonials', component:TestimonialsComponent},
  {path:'contactme', component:ContactmeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [WhoamiComponent,WhatidoComponent,TestimonialsComponent,ContactmeComponent]
