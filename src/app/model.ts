export class Product {
    id : number ;
    familles : Famille ; 
    laboratoires : Laboratoire ; 
    designation : string ;
    reference : string ;
    creation_date : Date ;  
    contenantCoffret : string ; 
    testContenant : string ; 
    cmm :string ;  
    StockMiniMois :string ; 

    constructor(obj?: any)
    {
        this.id= obj && obj.id||null
        this.familles= obj && obj.familles||null
        this.laboratoires= obj && obj.laboratoires||null
        this.designation= obj && obj.designation||null
        this.reference= obj && obj.reference||null
        this.creation_date= obj && obj.date||null
        this.contenantCoffret= obj && obj.contenantCoffret||null
        this.testContenant= obj && obj.testContenant||null
        this.cmm= obj && obj.cmm||null
        this.StockMiniMois= obj && obj.StockMiniMois||null 
    }

    public static fromJson(json: Object): Product {
        return new Product({
            id:json['id'],
            familles:Famille.fromJson(json['familles']),
            laboratoires:Laboratoire.fromJson(json['laboratoires']),
            designation:json['designation'],
            reference:json['reference'],
            creation_date:new Date(json['creation_date']),
            contenantCoffret:json['contenantCoffret'],
            testContenant:json['testContenant'],
            cmm:json['cmm'],
            StockMiniMois:json['StockMiniMois']
        }


        );
    }

   
}

export class Famille {
    id: number ;
    designation: string ;
  
    constructor(obj?: any)
    {
        this.id= obj && obj.id || null;
        this.designation= obj && obj.designation || null;
  
    }

    public static fromJson(json: Object): Famille {
        return new Famille({
            id:json['id'],
            designation:json['designation'],
        }


        );
    }

   
}

export class Laboratoire {
    id: number ;
    designation: string ;
  
    constructor(obj?: any)
    {
        this.id= obj && obj.id || null;
        this.designation= obj && obj.designation || null;
  
    }

    public static fromJson(json: Object): Laboratoire {
        return new Laboratoire({
            id:json['id'],
            designation:json['designation'],
        }


        );
    }

   
}






export class NavPath {
    label : string ; 
    path : string ; 
    icon_name : string ; 

    constructor(label: string , path : string,icon_name : string)
    {
        this.label=label;
        this.path = path;    
        this.icon_name = icon_name;
    }


}
