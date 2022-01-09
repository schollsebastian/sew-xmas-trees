import {Component} from '@angular/core';

@Component({
    selector: 'app-tree',
    templateUrl: './tree.component.html',
    styleUrls: ['./tree.component.scss']
})
export class TreeComponent {

    public selectedType: string | null;

    constructor() {
        this.selectedType = null;
    }

    typeSelectionChanged(type: string): void {
        this.selectedType = type;
    }
}
