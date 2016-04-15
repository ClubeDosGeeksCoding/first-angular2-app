import {Component} from 'angular2/core';
@Component({
  templateUrl:"views/person.html"
})
export class PersonComponent {
	private persons: PersonComponent[];
	constructor(){
		this.persons = [
			{id: 1, name:'Jayr', phone:"8786732"}
		]
	}
}