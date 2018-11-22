import { FormGroup } from '@angular/forms';

export class Product {
    id: number ;
    famille: any ;
    laboratoire: any ;
    designation: string ;
    reference: string ;
    creation_date: string ;
    contenantCoffret: number ;
    testContenant: number ;
    cmm: number ;
    StockMiniMois: number ;

    constructor(obj?: any) {
        this.id = obj && obj.id || null ;
        this.famille = obj && obj.famille || null ;
        this.laboratoire = obj && obj.laboratoire || null ;
        this.designation = obj && obj.designation || null ;
        this.reference = obj && obj.reference || null ;
        this.creation_date = obj && obj.creation_date || null ;
        this.contenantCoffret = obj && obj.contenantCoffret || null ;
        this.testContenant = obj && obj.testContenant || null ;
        this.cmm = obj && obj.cmm || null ;
        this.StockMiniMois = obj && obj.StockMiniMois || null ;
    }

    public static fromJson(json: Object): Product {
        return new Product({
            id: json['id'],
            famille: Famille.fromJson(json['famille']),
            laboratoire: Laboratoire.fromJson(json['laboratoire']),
            designation: json['designation'],
            reference: json['reference'],
            creation_date: json['creation_date'],
            contenantCoffret: json['contenantCoffret'],
            testContenant: json['testContenant'],
            cmm: json['cmm'],
            StockMiniMois: json['StockMiniMois']
        }


        );
    }
    public static fromFrom(form: FormGroup , id: number ) {
        return new Product({
            id : id,
            reference : form.value.reference,
            designation : form.value.designation,
            famille : form.value.famille,
            laboratoire :  form.value.laboratoire,
            contenantCoffret : form.value.conditionnement.contenantCoffret,
            testContenant : form.value.conditionnement.testContenant,
            cmm :  form.value.stock.cmm,
            StockMiniMois : form.value.stock.stockMiniMois,
            creation_date : '2018-08-08'
           });

    }

}

export class Famille {
    id: number ;
    designation: string ;
    constructor(obj?: any) {
        this.id = obj && obj.id || null;
        this.designation = obj && obj.designation || null;
    }

    public static fromJson(json: Object): Famille {
        if (json !== null) {
        return new Famille({
            id: json['id'],
            designation: json['designation'],
        }); }
        return null;
    }
}

export class Laboratoire {
    id: number ;
    designation: string ;
    constructor(obj?: any) {
        this.id = obj && obj.id || null;
        this.designation = obj && obj.designation || null;
    }

    public static fromJson(json: Object): Laboratoire {
        if (json !== null) {
            return new Laboratoire({
                id: json['id'],
                designation: json['designation'],
            }); }
            return null;
        }
    }







export class NavPath {
    module: string;
    label: string ;
    path: string ;
    icon_name: string ;

    constructor(module: string , label: string , path: string, icon_name: string) {
        this.label = label;
        this.path = path;
        this.icon_name = icon_name;
    }


}
