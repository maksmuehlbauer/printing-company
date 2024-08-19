import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-company-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './company-contact.component.html',
  styleUrl: './company-contact.component.scss'
})
export class CompanyContactComponent {

  isDisabled: boolean = true;

  contactData = {
    name: "",
    mail: "",
    message: ""
  }

  onSubmit(ngForm: NgForm) {
    console.log(this.contactData)
  }

  checkInputs() {
    if(this.contactData.name.length > 1 &&
      this.contactData.mail.length > 5 &&
      this.contactData.message.length > 9) {
        this.isDisabled = false
    } else {
      this.isDisabled = true;
    }

  }

  btnState() {
    return this.isDisabled ? 'btn-disabled' : 'btn-submit'
  }

}
