import { Book } from './book';

export class MyBooks {

	list : Book[] = new Array(4);

  constructor() { 

		this.list[0] = {
			name: "Network Engineering",
			author: "Bob",
			genre: "Science",
			year: "2015",
			picture: "/SYST24444_Spring_2019/Assignments/Assignment3/assets/images/network.png"
			// picture: "/assets/images/network.png"
		};

		this.list[1] = {
			name: "Clean Code",
			author: "Uncle",
			genre: "Programming",
			year: "2007",
			picture: "/SYST24444_Spring_2019/Assignments/Assignment3/assets/images/clean.png"
			// picture: "/assets/images/clean.png"
		};

		this.list[2] = {
			name: "Angular Mobile",
			author: "Ronak",
			genre: "Programming",
			year: "2019",
			picture: "/SYST24444_Spring_2019/Assignments/Assignment3/assets/images/angular.png"
			// picture: "/assets/images/angular.png"
		};

		this.list[3] = {
			name: "Oracle SQL",
			author: "John",
			genre: "Database",
			year: "2018",
			picture: "/SYST24444_Spring_2019/Assignments/Assignment3/assets/images/oracle.png"
			// picture: "/assets/images/oracle.png"
		};

	}
	
}