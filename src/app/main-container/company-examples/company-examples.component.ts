import { Component, inject } from '@angular/core';
import { CompanyService } from '../../company.service';

@Component({
  selector: 'app-company-examples',
  standalone: true,
  imports: [],
  templateUrl: './company-examples.component.html',
  styleUrl: './company-examples.component.scss'
})
export class CompanyExamplesComponent {

  examplesData = inject(CompanyService)
}
