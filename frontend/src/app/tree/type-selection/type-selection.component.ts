import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BackendService} from "../../shared/backend.service";
import {MatSelectChange} from "@angular/material/select";

@Component({
    selector: 'app-type-selection',
    templateUrl: './type-selection.component.html',
    styleUrls: ['./type-selection.component.scss']
})
export class TypeSelectionComponent implements OnInit {

    public treeTypes: string[] | null;
    public selectedType: string | null;

    @Output()
    private typeSelected: EventEmitter<string>

    constructor(private readonly backend: BackendService) {
        this.treeTypes = null;
        this.selectedType = null;
        this.typeSelected = new EventEmitter<string>();
    }

    public ngOnInit(): void {
        this.backend.getAllTreeTypes()
            .subscribe({
                next: res => {
                    this.treeTypes = res;
                    if (res.length > 0) {
                        this.selectedType = res[0];
                        this.typeSelected.emit(this.selectedType);
                    }
                },
                error: err => {
                    console.log(err.messageText)
                }
            });
    }

    typeSelectionChanged(change: MatSelectChange) {
        this.typeSelected.emit(change.value);
    }
}
