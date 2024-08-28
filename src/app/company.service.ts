import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor() { }

  private messageSource = new Subject<any>();
  currentMessage = this.messageSource.asObservable();

  sendMessage(message: any) {
    this.messageSource.next(message);
  }

  moreBenefitInfos = [
    {
      title: 'Recyclable Inks: A Greener Choice',
      content: 'Recyclable inks are specially formulated to be easily removed from paper during the recycling process. These inks are made with ingredients that break down more readily, allowing the paper fibers to be reclaimed and reused. By choosing recyclable inks, businesses and individuals can reduce their environmental impact and contribute to a more sustainable future.'
    },
    {
      title: 'Color Management',
      content: 'Color management is the process of ensuring consistent color reproduction across different devices and media. It involves creating color profiles that describe how a device perceives and reproduces color. By using color management systems, designers and printers can achieve accurate and predictable color results, regardless of the output medium. Key benefits include reducing costly reprints and ensuring that digital designs match physical prints.'
    },
    {
      title: 'Global Logistic Partner',
      content: 'Die globale Logistik ist das Herzstück des modernen Welthandels. Sie umfasst die Planung, Durchführung und Kontrolle des Transports von Gütern über Ländergrenzen hinweg. Von der Produktion bis zum Endkunden spielt die Logistik eine entscheidende Rolle in der Lieferkette. Durch Optimierung von Transportwegen, Lagerung und Zollformalitäten wird eine effiziente und kostengünstige Lieferung gewährleistet.'
    }
  ]


  moreExamplesInfos = [
    {
      title: 'Engraving',
      content: 'Embossed surfaces create subtle tactile experiences. We create even complicated motifs with the utmost precision – from a colorfully accentuated embossed logo on your stationery to elaborate packaging with hot foil embossing.'
    },
    {
      title: 'Stiffbrochures',
      content: 'The choice of perfect binding, thread stitching or Swiss brochure not only determines the lifespan of a book, but also its comfort and handling. Our extensive experience in book production makes us your ideal contact.'
    },
    {
      title: 'Hardcover: The Classic Book Binding',
      content: '2Producing a hardcover book is a complex process. First, the individual book pages are printed and assembled into a book block. The book block is then glued into a sturdy cover. High-quality materials such as cardboard, leather, or fabric are typically used for the cover. Often, hardcovers are further enhanced with gilded edges or other finishing touches to improve their appearance.'
    }
  ]

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
