
interface car{

    engine:number
    model:any
    productID:number
    licensePlate:any
    color: string  
    milage: number  
}
    
class Toyota implements  car
{
    engine:number
    model:any
    make:string
    productID:number
    licensePlate:any
    color: string 
    milage: number 

    constructor()
    {
        this.make = "**Toyota**"
    }
}

class corolla extends Toyota{


setCorollavalues()
{
this.color="Blue"
this.model="Corolla"
this.productID=25334
this.licensePlate="ASD 256"
this.milage=15069
this.engine=123456789
}

getCorollavalues()
{
console.log("Color of car : "+this.color)
console.log("model of car : "+this.model)
console.log("Product ID of car"+this.productID)
console.log("Mileage of car"+this.milage)
console.log("Engine number of car"+this.engine)
console.log("Number Plate of car"+this.licensePlate)
}
}


class prius extends Toyota{

    setPriusvalues()
    {
    this.color="Red"
    this.model="Prius"
    this.productID=12547
    this.licensePlate="AGH 000"
    this.milage=1300
    this.engine=654123789
    }
    
    getPriusvalues()
    {
    console.log("Color of car : "+this.color)
    console.log("model of car : "+this.model)
    console.log("Product ID of car"+this.productID)
    console.log("Mileage of car"+this.milage)
    console.log("Engine number of car"+this.engine)
    console.log("Number Plate of car"+this.licensePlate)
    }


}

class Suzuki implements  car{
    engine:number
    model:any
    productID:number
    licensePlate:any
    color: string  
    milage: number 
    make:string
    constructor(){

        this.make="***Suzuki***"

    }
}


class Mehran extends Suzuki {

    setMehranvalues()
    {
    this.color="Grey"
    this.model="Mehran"
    this.productID=55648
    this.licensePlate="AFS 101"
    this.milage=1560
    this.engine=658749321
    }
    
    getMehranvalues()
    {
    console.log("Color of car : "+this.color)
    console.log("model of car : "+this.model)
    console.log("Product ID of car"+this.productID)
    console.log("Mileage of car"+this.milage)
    console.log("Engine number of car"+this.engine)
    console.log("Number Plate of car"+this.licensePlate)
    }
}

class Bolan extends Suzuki{
    setBolanvalues()
    {
    this.color="White"
    this.model="Bolan"
    this.productID=89547
    this.licensePlate="ABD 420"
    this.milage=85420
    this.engine=654123789
    }
    
    getBolanvalues()
    {
    console.log("Color of car : "+this.color)
    console.log("model of car : "+this.model)
    console.log("Product ID of car"+this.productID)
    console.log("Mileage of car"+this.milage)
    console.log("Engine number of car"+this.engine)
    console.log("Number Plate of car"+this.licensePlate)
    }


}


var b:corolla=new corolla()
var c:prius=new prius()
var d:Mehran=new Mehran()
var e:Bolan=new Bolan()


b.setCorollavalues()
c.setPriusvalues()
d.setMehranvalues()
e.setBolanvalues()

alert("Open console")

console.log("**********  Cars ************ \n\n")
b.getCorollavalues()
console.log("********************** \n\n")
c.getPriusvalues()
console.log("******************** \n\n")
d.getMehranvalues()
console.log("******************** \n\n")
e.getBolanvalues()