import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { ContactsListComponent } from '../components/contacts-list/contacts-list.component';
import { MessagesComponent } from '../components/messages/messages.component';
import { LayoutComponent } from '../components/layout/layout.component';
import { ContactDetailsComponent } from '../components/contacts/contact-details/contact-details.component';


const appRoutes: Routes = [
	{ path: 'contacts', component: ContactsListComponent },
	{ path: 'messages', component: MessagesComponent },
	{ path: '', redirectTo: '/contacts', pathMatch: 'full' },
	{ path: 'contacts/:id', component: ContactDetailsComponent },
]

@NgModule({
  imports: [
	  CommonModule,
	  RouterModule.forRoot(
		appRoutes),


  ],
  declarations: [
	  ContactsListComponent,
	  MessagesComponent,
	  LayoutComponent,
	  ContactDetailsComponent,
  ],
  exports: [
  	LayoutComponent
  ]
})
export class AppRoutingModule { }
