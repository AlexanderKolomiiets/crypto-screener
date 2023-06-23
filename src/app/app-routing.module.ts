import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoinListComponent } from './coin-list/coin-list.component';
import { CoinDetailsComponent } from './coin-details/coin-details.component';

const routes: Routes = [
	{ path: 'coin-list', component: CoinListComponent },
	{ path: 'coin-details/:id', component: CoinDetailsComponent },
	{ path: '', redirectTo: 'coin-list', pathMatch: 'full' },
	{ path: '**', redirectTo: 'coin-list' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}