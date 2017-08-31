class InventoryController {
    constructor() {
        this.message = "Search Inventory by make, model, year, or price";
        this.cars = [
            { year: "2008", make: "Ford",       model: "F-150",   price: 11998  },
            { year: "1998", make: "Chevrolet",  model: "Camaro",  price: 8799   },
            { year: "2012", make: "Infinity",   model: "G37",     price: 24689  },
            { year: "2010", make: "Toyota",     model: "Corolla", price: 14500  },
            { year: "2015", make: "Dodge",      model: "Ram",     price: 28399  },
            { year: "2002", make: "Volkswagon", model: "Passat",  price: 4900   },
            { year: "2017", make: "Ferrari",    model: "488GTB",  price: 212000 }
        ];
        this.getCars();
    }
    getCars() {
        return this.cars;
    }
    calculateTax() {
        this.price = this.price * .09


    }
}