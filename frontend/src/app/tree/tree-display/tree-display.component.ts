import {Component, Input, OnInit} from '@angular/core';
import {BackendService, ITree} from "../../shared/backend.service";
import { SaleDataService } from '../../sale-data.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-tree-display',
    templateUrl: './tree-display.component.html',
    styleUrls: ['./tree-display.component.scss']
})
export class TreeDisplayComponent implements OnInit {

    @Input()
    public treeId!: number;

    @Input()
    public type!: string;

    public tree: ITree | null;

    public constructor(private readonly backendService: BackendService,
                       private readonly saleDataService: SaleDataService,
                       private readonly router: Router) {
        this.tree = null;
    }

    public buyTree(): void {
        this.saleDataService.tree = this.tree;
        this.router.navigate([ 'sale' ]);
    }

    public async ngOnInit(): Promise<void> {
        this.tree = await this.backendService.getTreeById(this.type, this.treeId);
    }

    public get btnText(): string {
        return this.tree?.sold ? 'Sold' : 'Buy';
    }

}
