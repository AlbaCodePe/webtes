import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [
    SignUpComponent,
    SignInComponent
    // Otros componentes
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class PagesModule { }
