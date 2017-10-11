import { Injectable } from '@angular/core';
import { contacts } from '../contacts';


@Injectable()
export class ContactsService {

  constructor() { }

  getContacts(): Array<Object> {
	  return contacts;
  }

}
