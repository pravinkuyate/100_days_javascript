// class 


class car{
    constructor(make,model,year,color){
        this.make=make
        this.model=model
        this.year=year;
        this.color=color


    }

    drive(model="jag"){
        return this.model=model;
    }

    
}

let mycar=new car("toyota","etios",2020,"black")
mycar.drive()
console.log(mycar.model)
console.log(mycar.drive())





