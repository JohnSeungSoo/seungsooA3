import { Component, OnInit } from '@angular/core';
import { MyBooks } from '../myBooks';
import { Book } from '../book';

@Component({
  selector: 'app-seungsoo',
  templateUrl: './seungsoo.component.html',
  styleUrls: ['./seungsoo.component.css']
})
export class SeungsooComponent implements OnInit {

	mybooks: MyBooks;
	bookSelected: Book;

  constructor() { }

  ngOnInit() {
		this.mybooks = new MyBooks();
		this.bookSelected = this.mybooks.list[0];
	}
	
	displayBook(idx: number) {
		this.bookSelected = this.mybooks.list[idx];
	}

}
