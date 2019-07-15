import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { Seungsoo } from '../seungsoo';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {

	today: string ="";
	currSeungsoo : Seungsoo;

  constructor() {
	this.today = formatDate(new Date(), 'yyyy/MM/dd', 'en');
  }

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
