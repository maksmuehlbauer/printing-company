import { Component } from '@angular/core';
import { HeadSectionComponent } from './head-section/head-section.component';
import { CompanyDescriptionComponent } from './company-description/company-description.component';
import { CompanyStatementComponent } from './company-statement/company-statement.component';
import { CompanyPresentationComponent } from './company-presentation/company-presentation.component';
import { CompanyExamplesComponent } from './company-examples/company-examples.component';

@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [HeadSectionComponent, 
    CompanyDescriptionComponent,
    CompanyStatementComponent,
    CompanyPresentationComponent,
    CompanyExamplesComponent
  ],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.scss'
})
export class MainContainerComponent {

}
