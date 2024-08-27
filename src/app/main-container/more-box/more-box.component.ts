import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-more-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './more-box.component.html',
  styleUrl: './more-box.component.scss'
})
export class MoreBoxComponent {
  @Input() moreInfos = {
    title: 'Info',
    content: 'Content'
  }

  isOpen = false;


  openBox() {
    this.isOpen = true
  }

  closeBox() {
    this.isOpen = false
  }
}