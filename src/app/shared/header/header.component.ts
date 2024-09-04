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
  
menuToggle() {
  if(!this.menuVisible) {
    this.menuVisible = true;
    this.toggleScrolling()
  } else {
    this.menuVisible = false;
    this.toggleScrolling()
  }
}

removeZindexAfterDelay() {
  setTimeout(() => {
    this.menuVisible = false;
  }, 500);
}

toggleMenu(): string {
  return this.menuVisible ? 'menu-open' : '';
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
}
