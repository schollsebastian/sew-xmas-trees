import { Component, OnInit } from '@angular/core';
import { SaleDataService } from '../shared/sale-data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ITree } from '../shared/backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent implements OnInit {

  public tree: ITree;
  public formGroup: FormGroup;

  public constructor(private readonly dataService: SaleDataService,
                     private readonly router: Router) {
    this.tree = dataService.tree!;
    this.formGroup = new FormGroup({
      firstName: new FormControl('', [ Validators.required ]),
      lastName: new FormControl('', [ Validators.required ]),
      email: new FormControl('', [ Validators.required, Validators.email ]),
      street: new FormControl('', [ Validators.required ]),
      houseNumber: new FormControl('', [ Validators.required, Validators.pattern(/[\d]/g) ]),
      zip: new FormControl('', [ Validators.required, Validators.pattern(/^\d{4}$/) ]),
      city: new FormControl('', [ Validators.required ])
    });
  }

  public ngOnInit(): void {
    if (!this.dataService.tree) {
      this.router.navigate([ '' ]);
    }
  }

  public submit(): void {
    this.dataService.data = {
      firstName: this.formGroup.get('firstName')?.value,
      lastName: this.formGroup.get('lastName')?.value,
      email: this.formGroup.get('email')?.value,
      address: {
        street: this.formGroup.get('street')?.value,
        houseNumber: this.formGroup.get('houseNumber')?.value,
        zip: this.formGroup.get('zip')?.value,
        city: this.formGroup.get('city')?.value
      }
    };
    console.log(this.dataService.data);
    this.router.navigate([ 'pay-pal' ])
  }

}
