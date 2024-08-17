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

  companyPresentation = [
    { title: 'Personal', img: './assets/images/company-presentation/personal.png'},
    { title: 'Certified', img: './assets/images/company-presentation/certified.png' },
    { title: 'on Time', img: './assets/images/company-presentation/on-time.png' },
    { title: 'Profitable', img: './assets/images/company-presentation/profitable.png' }
  ]

  companyExamples = [
    { 
      title: 'Laser engraving',
      img: './assets/images/company-examples/laser-gravur.jpg',
      description: 'Laser engraving is a precise technology that can process a wide variety of materials with high accuracy and fine details.'
     },
     {
      title: 'Stiff brochure',
      img: './assets/images/company-examples/broschur.jpg',
      description: 'A rigid brochure combines the flexibility of a brochure with the stability of a hardcover for long-lasting books.'
     },
     {
      title: 'Hardcover',
      img: './assets/images/company-examples/hardcover.jpg',
      description: 'A hardcover book offers special protection thanks to its solid cover and appears high-quality and durable.'
     }     
  ]

  companyBenefits = [
    {
      img: './assets/images/company-benfits/ink.jpg',
      title: 'Recyclable colors',
      description: 'Recyclable paints are eco-friendly alternatives designed to minimize environmental impact. Made from sustainable materials, they can be reused or safely disposed of, reducing waste and pollution while promoting a more sustainable future'
    },
    {
      img: './assets/images/company-benfits/plotter.jpg',
      title: 'Precise color reproduction',
      description: 'Precise color reproduction ensures that colors are accurately represented across different devices and media. It maintains consistency, allowing designs and visuals to appear as intended, whether in print, on screens, or other platforms'
    },
    {
      img: './assets/images/company-benfits/pallets.jpg',
      title: 'Worldwide delivery',
      description: 'Our worldwide delivery ensures that your products reach any destination on Earth safely and on time. No matter where you are, we deliver your order reliably and efficiently, right to your doorstep'
    }

  ]
}
