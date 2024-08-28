import { Component, Input, Output, EventEmitter, inject} from '@angular/core';
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
  constructor(private companyService: CompanyService) {}

  benefitData = inject(CompanyService)

  @Input()benefit =  {
    img: 'img path',
    title: 'title',
    description: 'description'
  }

  @Input()id!: number;

  oddIdsColor(id: number): string {
    return id % 2 !== 0 ? 'special-odd-id' : ''
  }

  sendMessageToParent(id: number) {
    // const message = { title: 'Message from nested component', content: 'This is the content' };
    const example = this.benefitData.moreBenefitInfos[id]
    this.companyService.sendMessage(example);
  }



}
