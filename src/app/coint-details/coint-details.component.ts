import { ApiService } from './../service/api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-coint-details',
  templateUrl: './coint-details.component.html',
  styleUrls: ['./coint-details.component.scss']
})
export class CoinDetailsComponent implements OnInit {
	coinData : any;
	coinId !: string;
	days : number = 30;
	currency : string = "UAH";

	constructor(
		private api : ApiService,
		private activatedRoute : ActivatedRoute,
	) { }

	ngOnInit(): void {
		this.activatedRoute.params.subscribe(val => {
			this.coinId = val['id'];
		})
		// this.getCoinData();
	}

	getCoinData() {
		this.api.getCurrencyById(this.coinId)
		.subscribe(res=>{
		  this.coinData = res;
		  console.log(this.coinData);
		})
	}
}

