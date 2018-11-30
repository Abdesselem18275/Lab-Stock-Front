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

export class TransProduct {
    id: number ;
    produit: any ;
    numero_lot: number ;
    quantite: number ;
    modification_date: string ;
    peremption_date: string ;


    constructor(obj?: any) {
        this.id = obj && obj.id || null ;
        this.produit = obj && obj.produit || null ;
        this.numero_lot = obj && obj.numero_lot || null ;
        this.quantite = obj && obj.quantite || null ;
        this.modification_date = obj && obj.modification_date || null ;
        this.peremption_date = obj && obj.peremption_date || null ;
    }

    public static fromJson(json: Object): TransProduct {
        return new TransProduct({
            id: json['id'],
            produit: Product.fromJson(json['produit']),
            numero_lot: json['numero_lot'],
            quantite: json['quantite'],
            modification_date: json['modification_date'],
            peremption_date: json['peremption_date']
        }
        );
    }
    public static fromForm(form: FormGroup , id: number ): TransProduct {
        return new TransProduct({
            id : id,
            produit : form.value.produit,
            numero_lot : form.value.numero_lot,
            quantite : form.value.quantite,
            modification_date :  form.value.modification_date,
            peremption_date : form.value.peremption_date
           });
    }
}


export class NavPath {
    module: string;
    label: string ;
    path: string ;
    element_name: string ;
    params: any;

    constructor(module: string , label: string , path: string, element_name: string, params?: any) {
        this.module = module;
        this.label = label;
        this.path = path;
        this.element_name = element_name;
        this.params = params || null;
    }


}
