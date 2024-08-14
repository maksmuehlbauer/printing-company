import { Component, inject } from '@angular/core';
import { CompanyService } from '../../company.service';

@Component({
  selector: 'app-company-description',
  standalone: true,
  imports: [],
  templateUrl: './company-description.component.html',
  styleUrl: './company-description.component.scss'
})
export class CompanyDescriptionComponent {

  descriptionsData = inject(CompanyService)
}
