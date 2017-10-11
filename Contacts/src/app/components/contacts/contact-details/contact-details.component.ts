import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from '../../../services/contacts.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  constructor(private contactService: ContactsService, 
  	private route:ActivatedRoute) {
	  route.params.subscribe(params => { console.log(params); });
   }

  ngOnInit() {
  }

}
