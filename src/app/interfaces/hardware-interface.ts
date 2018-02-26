import {AbstractControl,FormControl} from '@angular/forms'


export interface Hard{
    hardwareName:string;
    hardwarePrice:number;
    hardwarePlace?:number;
}
export  interface Hard2{
    hardwareName:{
        infotext:string,
        value:string
    };
    hardwarePrice:{
        infotext:string,
        value:number
    };
    hardwarePlace:{
        infotext:string,
        value:number
    }
}

