import { Component } from '@angular/core';
import { BackendService, ITree } from '../shared/backend.service';
import { SaleDataService } from '../shared/sale-data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent {

  public tree: ITree;
  public formGroup: FormGroup;

  public constructor(private readonly dataService: SaleDataService,
                     private readonly backendService: BackendService) {
    this.tree = dataService.tree!;
    this.formGroup = new FormGroup({
      firstName: new FormControl('', [ Validators.required, Validators.pattern(/[a-zA-Z- ']/g) ]),
      lastName: new FormControl('', [ Validators.required, Validators.pattern(/[a-zA-Z- ']/g) ]),
      street: new FormControl('', [ Validators.required, Validators.pattern(/[a-zA-Z- ']/g) ]),
      houseNumber: new FormControl('', [ Validators.required, Validators.pattern(/[\d]/g) ]),
      zip: new FormControl('', [ Validators.required, Validators.pattern(/\d/),
        Validators.minLength(4), Validators.maxLength(4) ]),
      city: new FormControl('', [ Validators.required, Validators.pattern(/[a-zA-Z- ']/g) ])
    });
  }

}
