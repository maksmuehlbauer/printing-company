import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './information.component.html',
  styleUrl: './information.component.scss'
})
export class InformationComponent {

openMenuIndex: number | null = null;

toggleMenu(index: number): void {
  if (this.openMenuIndex === index) {
    this.openMenuIndex = null
  } else {
    this.openMenuIndex = index
  }
}

showCloseMenu(index: number): string {
  return this.openMenuIndex === index ? 'drop-down-menu-open' : '';
}
}
