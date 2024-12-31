import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { InvestmentSerivce } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {

  private investmentService = inject(InvestmentSerivce);

  results = computed(() => this.investmentService.resultData());
  // or instead of computed function we can use this.investmentService.resultData.asReadonly()
  
  

}
