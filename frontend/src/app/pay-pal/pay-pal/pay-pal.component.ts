import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pay-pal',
  templateUrl: './pay-pal.component.html',
  styleUrls: ['./pay-pal.component.scss']
})
export class PayPalComponent {

  public formGroup: FormGroup;

  constructor() {
    this.formGroup = new FormGroup({
      creditCardNr: new FormControl('', [ Validators.required, Validators.pattern(/^\d{16}$/) ]),
      expiryDate: new FormControl('', [ Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/(\d{2})$/) ]),
      owner: new FormControl('', [ Validators.required ])
    })
  }

}
