import { Component, OnInit } from '@angular/core';
import { Seungsoo } from '../seungsoo';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	currSeungsoo : Seungsoo;

  constructor() { }

  ngOnInit() {
		  this.currSeungsoo = {
			studentId: 991494887,
			studentName: "Seungsoo Kang",
			loginName: "seungsoo",
			campus: "Trafalgar",
			assignmentTitle: "Assignment3"
		};
	}
	
}
