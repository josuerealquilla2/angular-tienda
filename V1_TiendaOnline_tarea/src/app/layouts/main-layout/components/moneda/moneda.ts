import {Component, output} from '@angular/core';

@Component({
    selector: 'app-moneda',
    imports: [],
    templateUrl: './moneda.html',
    styleUrl: './moneda.scss',
    standalone: true
})
export class Moneda {

    openMonedaDesdeHeader = output();

}
