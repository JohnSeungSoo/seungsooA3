import { Book } from './book';

export class myBooks {

	mybooks : Book[] = new Array(4);

  constructor() { 

		this.mybooks[0] = {
			name: "Network Engineering",
			author: "Bob",
			genre: "Science",
			year: "2015",
			picture: ""
		};

		this.mybooks[1] = {
			name: "Clean Code",
			author: "Uncle",
			genre: "Programming",
			year: "2007",
			picture: ""
		};

		this.mybooks[2] = {
			name: "Angular Mobile",
			author: "Ronak",
			genre: "Programming",
			year: "2019",
			picture: ""
		};

		this.mybooks[3] = {
			name: "Oracle SQL",
			author: "John",
			genre: "Database",
			year: "2018",
			picture: ""
		};

	}
	
}