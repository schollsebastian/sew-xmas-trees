import { Component } from '@angular/core';
import { BackendService, ITree } from '../shared/backend.service';
import { SaleDataService } from '../sale-data.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent {

  public tree: ITree;

  public constructor(private readonly dataService: SaleDataService,
                     private readonly backendService: BackendService) {
    this.tree = dataService.tree!;
  }

}
