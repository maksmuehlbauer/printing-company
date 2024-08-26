import { Component, Input } from '@angular/core';
import { CompanyService } from '../../../company.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-benefit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-benefit.component.html',
  styleUrl: './single-benefit.component.scss'
})
export class SingleBenefitComponent {


  @Input()benefit =  {
    img: 'img path',
    title: 'title',
    description: 'description'
  }

  @Input()id!: number;

  oddIdsColor(id: number): string {
    return id % 2 !== 0 ? 'special-odd-id' : ''
  }

}
