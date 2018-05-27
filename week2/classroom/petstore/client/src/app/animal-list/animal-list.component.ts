import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-animal-list',
	templateUrl: './animal-list.component.html',
	styleUrls: ['./animal-list.component.scss']
})
export class AnimalListComponent {
	animals;

	constructor(private http:HttpClient) {
		this.http.get('/api/all').toPromise().then(animals => {
			console.log('All animals: %o', animals);
			this.animals = animals;
		});
	}

}
