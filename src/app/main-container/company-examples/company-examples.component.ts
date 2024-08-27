import { Component, inject, Output, EventEmitter } from '@angular/core';
import { CompanyService } from '../../company.service';
import { MoreBoxComponent } from "../more-box/more-box.component";

@Component({
  selector: 'app-company-examples',
  standalone: true,
  imports: [MoreBoxComponent],
  templateUrl: './company-examples.component.html',
  styleUrl: './company-examples.component.scss'
})
export class CompanyExamplesComponent {

  examplesData = inject(CompanyService)

  @Output() sendToMoreBox = new EventEmitter<{title: string, content: string}>();

  onMoreClick(index: number) {
    const example = this.examplesData.moreBenefitInfos[index]
    this.sendToMoreBox.emit({
      title: example.title,
      content: example.content
    })
  }
}
