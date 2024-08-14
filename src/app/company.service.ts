import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor() { }

  companyOffer = [
    { title: 'Professional Service', description: 'We are at your side to advise you from the initial inquiry to delivery. We support you with questions about materials, configure the ideal production process and deliver top quality at a fair price. If required, we can also deliver within 24 hours.' },
    { title: 'Book Production', description: 'We have a long tradition of book production. We know the industrys specific requirements inside out and offer the right service from layout to individual finishing. Now even faster and more efficient thanks to the latest technology.'},
    { title: 'Natural Paper', description: 'We offer such good conditions for optimal printing on uncoated paper: Our special uncoated workflow for offset and digital printing guarantees impressive color reproduction and quality that you can feel.' }
  ]
}
