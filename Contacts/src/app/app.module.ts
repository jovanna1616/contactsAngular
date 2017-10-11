import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { ExponentialPipe } from './pipes/exponential.pipe';
import { ContactsService } from './services/contacts.service';





@NgModule({
  declarations: [
    AppComponent,
    ExponentialPipe,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
	
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
