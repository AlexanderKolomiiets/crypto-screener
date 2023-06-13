import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.scss']
})
export class CoinListComponent implements OnInit {
	constructor(private api: ApiService) { }

	bannerData: any = [];

	ngOnInit(): void {
		this.getAllData();
		// this.getBannerData();
	}

	getAllData() {
		this.api.getCurrency("UAH")
		.subscribe(res => {
			this.bannerData = res.slice(0, 10);
		})
	}

	// getBannerData() {
	// 	this.api.getTrendingCurrency("UAH")
	// 	.subscribe(res => {
	// 		this.bannerData = res.slice(0, 10);
	// 	})
	// }
}
