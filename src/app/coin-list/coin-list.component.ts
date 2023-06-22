import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../service/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.scss']
})
export class CoinListComponent implements OnInit {
	bannerData: any = [];
	currency: string = 'UAH';
	dataSource!: MatTableDataSource<any>;
	displayedColumns: string[] = ['symbol', 'current_price', 'price_change_percentage_24h', 'market_cap'];

	@ViewChild(MatPaginator) paginator!: MatPaginator;
	@ViewChild(MatSort) sort!: MatSort;

	constructor(
		private api: ApiService,
		private router: Router,
	) { }

	ngOnInit(): void {
		// this.getAllData();
		// this.getBannerData();
	}

	getBannerData() {
		this.api.getTrendingCurrency("UAH")
		.subscribe(res => {
			this.bannerData = res.slice(0, 10);
			console.log(this.bannerData);
		})
	}

	getAllData() {
		this.api.getCurrency("UAH")
		.subscribe(res => {
			this.dataSource = new MatTableDataSource(res);
			console.log(this.dataSource);
			this.dataSource.paginator = this.paginator;
			this.dataSource.sort = this.sort;
		})
	}

	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();

		if (this.dataSource.paginator) {
		  this.dataSource.paginator.firstPage();
		}
	}

	goToDetails(row: any) {
		this.router.navigate(['coin-details',row.id])
	}
}
