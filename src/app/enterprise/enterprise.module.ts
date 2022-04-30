import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnterpriseRoutingModule } from './enterprise-routing.module';
import { LandingComponent } from './pages/landing/landing.component';
import { EnterpriseLayoutComponent } from './layout/enterprise-layout/enterprise-layout.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';


@NgModule({
  declarations: [
    LandingComponent,
    EnterpriseLayoutComponent,
    AboutusComponent
  ],
  imports: [
    CommonModule,
    EnterpriseRoutingModule
  ]
})
export class EnterpriseModule { }
