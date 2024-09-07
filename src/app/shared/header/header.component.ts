import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

 menuVisible: boolean = false;
 scrollEnabled: boolean = true;
  

openCloseMenu() {
  if(!this.menuVisible) {
    this.menuVisible = true;
    this.toggleScrolling()
  } else {
    this.menuVisible = false;
    this.toggleScrolling()
  }
}

checkScrolling() {
  if (this.menuVisible && !this.scrollEnabled) {
    this.toggleScrolling()
    this.menuVisible = false
  }
}


toggleScrolling() {
  if (this.scrollEnabled) {
      document.body.style.overflow = 'hidden';
      this.scrollEnabled = false;
  } else {
      document.body.style.overflow = 'auto';
      this.scrollEnabled = true;
  }
}


toggleMenu(): string {
  return this.menuVisible ? 'menu-open' : '';
}
}
