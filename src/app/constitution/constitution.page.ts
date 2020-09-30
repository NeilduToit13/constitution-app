import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as Constitution from '../../assets/data/constitution.json';
// import * as TOC from '../../assets/data/toc.json';

@Component({
	selector: 'app-constitution',
	templateUrl: './constitution.page.html',
	styleUrls: ['./constitution.page.scss']
})
export class ConstitutionPage implements OnInit {
	constitution: any = (Constitution as any).default;
	navigate: any;
	newContent:any;

	constructor(private sanitized: DomSanitizer) { 
		this.newContent = this.sanitized.bypassSecurityTrustHtml(this.constitution.body)
	}

	ngOnInit() { this.sideMenu(); }

	scroll(id) {
		console.log(`scrolling to ${id}`);
		let el = document.getElementById(id);
		console.log(el);
		el.scrollIntoView();
	}
	
	sideMenu() {
		let menuList = this.constitution.toc.map((toc, i) => {
			return (
				{
					title: toc.title,
					id: toc.id
					// icon  : "home"
				}
			)
		});

		this.navigate = menuList;
	}
}
