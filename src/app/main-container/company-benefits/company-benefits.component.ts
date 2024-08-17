import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleBenefitComponent } from './single-benefit/single-benefit.component';
import { CompanyService } from '../../company.service';

@Component({
  selector: 'app-company-benefits',
  standalone: true,
  imports: [SingleBenefitComponent, CommonModule],
  templateUrl: './company-benefits.component.html',
  styleUrl: './company-benefits.component.scss'
})
export class CompanyBenefitsComponent {

  benefitsData = inject(CompanyService);

  changeDirection(index: number): string {
    return index % 2 === 0 ? 'single-benefit-left' : 'single-benefit-right'
  }
  
}
