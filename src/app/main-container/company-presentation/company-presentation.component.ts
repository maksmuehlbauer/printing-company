import { Component, inject } from '@angular/core';
import { CompanyService } from '../../company.service';

@Component({
  selector: 'app-company-presentation',
  standalone: true,
  imports: [],
  templateUrl: './company-presentation.component.html',
  styleUrl: './company-presentation.component.scss'
})
export class CompanyPresentationComponent {

  presentationData = inject(CompanyService)

}
