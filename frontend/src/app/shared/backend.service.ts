import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {firstValueFrom, Observable} from "rxjs";

const BASE_URL: string = 'http://localhost:8080/tree'

@Injectable({
    providedIn: 'root'
})
export class BackendService {

    constructor(private readonly http: HttpClient) {
    }

    public getAllTreeTypes(): Observable<string[]> {
        return this.http.get<string[]>(`${BASE_URL}/types`);
    }

    getTreesOfType(type: string): Promise<number[]> {
        const url = `${BASE_URL}/${type}`;
        const resp = this.http.get<number[]>(url);
        return firstValueFrom(resp);
    }

    public getTreeById(type: string, id: number): Promise<ITree> {
        const url = `${BASE_URL}/${type}/${id}`;
        const resp = this.http.get<ITree>(url);
        return firstValueFrom(resp);
    }

    public buyTree(type: string, id: number): Promise<ITree> {
        const url = `${BASE_URL}/${type}/${id}/buy`;
        const resp = this.http.patch<ITree>(url, {});
        return firstValueFrom(resp);
    }
}

export interface ITree {
    id: number,
    type: string,
    heightMeters: number,
    price: number,
    sold: boolean
}
