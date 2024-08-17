import { Component, Input } from '@angular/core';
import { CompanyService } from '../../../company.service';

@Component({
  selector: 'app-single-benefit',
  standalone: true,
  imports: [],
  templateUrl: './single-benefit.component.html',
  styleUrl: './single-benefit.component.scss'
})
export class SingleBenefitComponent {

  @Input()benefit =  {
    img: 'img path',
    title: 'title',
    description: 'description'
  }
}
