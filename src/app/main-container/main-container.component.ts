import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadSectionComponent } from './head-section/head-section.component';
import { CompanyDescriptionComponent } from './company-description/company-description.component';
import { CompanyStatementComponent } from './company-statement/company-statement.component';
import { CompanyPresentationComponent } from './company-presentation/company-presentation.component';
import { CompanyExamplesComponent } from './company-examples/company-examples.component';
import { CompanyBenefitsComponent } from './company-benefits/company-benefits.component';
import { CompanyContactComponent } from './company-contact/company-contact.component';
import { MoreBoxComponent } from './more-box/more-box.component';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [HeadSectionComponent, 
    CompanyDescriptionComponent,
    CompanyStatementComponent,
    CompanyPresentationComponent,
    CompanyExamplesComponent,
    CompanyBenefitsComponent,
    CompanyContactComponent,
    MoreBoxComponent,
    CommonModule
  ],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.scss'
})
export class MainContainerComponent implements AfterViewInit, OnInit {
  constructor(private companyService: CompanyService) {}

  @ViewChild('morebox') morebox!: MoreBoxComponent;

  ngAfterViewInit(): void {
    
  }

  ngOnInit(): void {
    this.companyService.currentMessage.subscribe((message: { title: string; content: string }) => {
      this.openDeepMsgFromSubject(message)
    })
  }

  openDeepMsgFromSubject(message: { title: string; content: string }) {
    this.morebox.moreInfos.title = message.title;
    this.morebox.moreInfos.content = message.content
    this.morebox.openBox();
  }



  openMoreBoxComponent(title: string, content: string) {
    if (this.morebox) {
      this.morebox.moreInfos.title = title;
      this.morebox.moreInfos.content = content;
      this.morebox.openBox();
 
    } else {
      console.error('MoreBoxComponent is not initialized yet.');
    }
  }

  checkCompIsOpen():string {
    return this.morebox && this.morebox.isOpen ? 'morebox' : 'd-none'
  }

  closeMoreBox() {
    this.morebox.closeBox();
  }

}
