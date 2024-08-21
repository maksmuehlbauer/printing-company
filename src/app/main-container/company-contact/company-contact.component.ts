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
  mailTest: boolean = true;
  http = inject(HttpClient)


  contactData = {
    name: "",
    mail: "",
    message: ""
  }


  post = {
    endPoint: 'https://maximilian-muehlbauer.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.isDisabled = true
            // this.userFeedback();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      console.info('send post TEST')
      ngForm.resetForm();
      this.isDisabled = true
    }
  }

  checkValid(ngForm: NgForm){
    if (ngForm.form.valid) {
      this.isDisabled = false;
    } else {
      this.isDisabled = true
    }
  }


  btnState() {
    return this.isDisabled ? 'btn-disabled' : 'btn-submit'
  }


}
