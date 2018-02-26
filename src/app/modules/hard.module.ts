import { Hard2 } from '../interfaces/hard2-interface';

import {Validators} from '@angular/forms'
export class HardModule{

    hard = {
        hardwareName: {
            infotext: 'Nazwa urzadzenia',
            value: '',
            fieldtype:'Text',
            validator: Validators.required
        },
        hardwarePrice: {
            infotext: 'Cena urzadzenia',
            value: 0,
            fieldtype:'Number',
            validator: null
        },
        hardwarePlace: {
            infotext: 'Miejsce skladowania',
            value: 0,
            fieldtype:'Number',
            validator: null
        },
        hardwareDescription: {
            infotext: 'Opis urzadzenia',
            value:'',
            fieldtype:'',
            validator: null
        }
    }
    constructor() {


    }
}

