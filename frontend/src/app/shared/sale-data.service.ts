import { Injectable } from '@angular/core';
import { ITree } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class SaleDataService {

  private treeToSell: ITree | null;
  private saleData: SaleData | null;

  constructor() {
    this.treeToSell = null;
    this.saleData = null;
  }

  public set tree(tree: ITree | null) {
    this.treeToSell = tree;
  }

  public get tree(): ITree | null {
    return this.treeToSell;
  }

  public set data(saleData: SaleData | null) {
    this.saleData = saleData;
  }

  public get data(): SaleData | null {
    return this.saleData;
  }

}

interface SaleData {

  firstName: string;
  lastName: string;
  email: string;
  address: {
    street: string;
    houseNumber: number;
    zip: number;
    city: string;
  }

}
