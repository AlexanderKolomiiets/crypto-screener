import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CoinListComponent } from './coin-list/coin-list.component';
import { CoinDetailsComponent } from './coint-details/coint-details.component';

@NgModule({
	declarations: [
		AppComponent,
		CoinListComponent,
		CoinDetailsComponent
	],
	imports: [
		BrowserModule,
		CommonModule,
		AppRoutingModule,
		NgbModule,
		HttpClientModule,
		FormsModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		MatSelectModule,
		MatFormFieldModule,
		MatInputModule,
		MatTableModule,
		MatSortModule,
		MatPaginatorModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
