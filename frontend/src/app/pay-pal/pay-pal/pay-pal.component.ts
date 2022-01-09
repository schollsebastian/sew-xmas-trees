import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SaleDataService } from '../../shared/sale-data.service';
import { BackendService } from '../../shared/backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pay-pal',
  templateUrl: './pay-pal.component.html',
  styleUrls: ['./pay-pal.component.scss']
})
export class PayPalComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(private readonly saleDataService: SaleDataService,
              private readonly backendService: BackendService,
              private readonly router: Router) {
    this.formGroup = new FormGroup({
      creditCardNr: new FormControl('', [ Validators.required, Validators.pattern(/^\d{16}$/) ]),
      expiryDate: new FormControl('', [ Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/(\d{2})$/) ]),
      owner: new FormControl('', [ Validators.required ])
    })
  }

  public ngOnInit(): void {
    if (!this.saleDataService.tree || !this.saleDataService.data) {
      this.router.navigate([ '' ]);
    }
  }

  public getName(): string {
    return `${this.saleDataService.data!.firstName} ${this.saleDataService.data!.lastName}`;
  }

  public getEmail(): string {
    return this.saleDataService.data!.email;
  }

  public getAddress(): string {
    return `${this.saleDataService.data!.address.street} ${this.saleDataService.data!.address.houseNumber}, ` +
      `${this.saleDataService.data!.address.zip} ${this.saleDataService.data!.address.city}`;
  }

  public getTree(): string {
    return this.saleDataService.tree!.type;
  }

  public getPrice(): number {
    return this.saleDataService.tree!.price;
  }

  public pay(): void {
    this.backendService.buyTree(this.saleDataService.tree!.type, this.saleDataService.tree!.id)
      .then(() => this.router.navigate([ '' ]));
  }

}
