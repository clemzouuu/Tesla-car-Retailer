class Car{
    constructor(brand,modele,color,speed,seats,autonomy,number_available,price,number_of_cars){
        this.brand = brand,  
        this.modele = modele,  
        this.color = color,  
        this.speed = speed,  
        this.seats = seats,  
        this.autonomy = autonomy,  
        this.number_available = number_available
        this.price = price
        this.number_of_cars = number_of_cars
    }

    addCar(){
        if(this.number_available > 0){
            this.number_available --
            this.number_of_cars ++ 
            total_price += this.price
            document.getElementById('text002').innerHTML = "Total price " + total_price + " €"
            document.getElementById("description_modele_s").innerHTML = tesla_s.brand + " "+ tesla_s.modele + ". " +  tesla_s.number_available + " car(s) available. " + tesla_s.price + " €" + " x" + tesla_s.number_of_cars
            document.getElementById("description_modele_3").innerHTML = tesla_3.brand + " "+ tesla_3.modele + ". " +  tesla_3.number_available + " car(s) available. " + tesla_3.price + " €" + " x" + tesla_3.number_of_cars
            document.getElementById("description_modele_x").innerHTML = tesla_x.brand + " "+ tesla_x.modele + ". " +  tesla_x.number_available + " car(s) available. " + tesla_x.price + " €" + " x" + tesla_x.number_of_cars
            document.getElementById("description_modele_y").innerHTML = tesla_y.brand + " "+ tesla_y.modele + ". " + tesla_y.number_available + " car(s) available. " + tesla_y.price + " €" + " x" + tesla_y.number_of_cars
            document.getElementById("description_cybertruck").innerHTML = cybertruck.brand + " "+ cybertruck.modele + ". " + cybertruck.number_available + " car available. " + cybertruck.price + " €" + " x" + cybertruck.number_of_cars
        }
    }

    removeCar(){
        // To substract an amount from the total amount
        if(total_price > 0 && this.number_of_cars > 0){
            this.number_available ++
            total_price -= this.price
            this.number_of_cars --
            document.getElementById('text002').innerHTML = "Total price " + total_price + " €"
            document.getElementById("description_modele_s").innerHTML = tesla_s.brand + " "+ tesla_s.modele + ". " +  tesla_s.number_available + " car(s) available. " + tesla_s.price + " €" + " x" + tesla_s.number_of_cars
            document.getElementById("description_modele_3").innerHTML = tesla_3.brand + " "+ tesla_3.modele + ". " +  tesla_3.number_available + " car(s) available. " + tesla_3.price + " €" + " x" + tesla_3.number_of_cars
            document.getElementById("description_modele_x").innerHTML = tesla_x.brand + " "+ tesla_x.modele + ". " +  tesla_x.number_available + " car(s) available. " + tesla_x.price + " €" + " x" + tesla_x.number_of_cars
            document.getElementById("description_modele_y").innerHTML = tesla_y.brand + " "+ tesla_y.modele + ". " + tesla_y.number_available + " car(s) available. " + tesla_y.price + " €" + " x" + tesla_y.number_of_cars
            document.getElementById("description_cybertruck").innerHTML = cybertruck.brand + " "+ cybertruck.modele + ". " + cybertruck.number_available + " car available. " + cybertruck.price + " €" + " x" + cybertruck.number_of_cars
        }
        
        // Avoid the price being > 0
        if(total_price <= 0){
            total_price = 0
            document.getElementById('text002').innerHTML = "Total price " + total_price + " €"    
        }
    }

}


class Truck extends Car {
    constructor(brand,modele,color,speed,seats,autonomy,number_available,price,number_of_cars,poids){
        super(brand,modele,color,speed,seats,autonomy,number_available,price,number_of_cars)
        this.poids = poids
    }
}



let tesla_s = new Car ("Tesla","Model S","Color : Red", "220km/h","5 seats","870 km",7,80000,0)
let tesla_3 = new Car ("Tesla","Model 3","Color : Blue", "160km/h","5 seats","590 km",4,43000,0)
let tesla_x = new Car ("Tesla","Model X","Color : White", "180km/h","7 seats","750km",6,120000,0)
let tesla_y = new Car ("Tesla","Model Y","Color : Red", "160km/h","5 seats","630 km",8,35000,0)
//let cybertruck = new Car ("Tesla","Cyber Truck","Color : Metal", "200km/h","5 seats","1000km",1,300000,0)
let cybertruck = new Truck ("Tesla","Cyber Truck","Color : Metal", "200km/h","5 seats","1000km",1,300000,0,"2 tonnes")


let description_modele_s = document.getElementById("description_modele_s").innerHTML = tesla_s.brand + " "+ tesla_s.modele + ". " +  tesla_s.number_available + " car(s) available. " + tesla_s.price + " €"
let description_modele_3 = document.getElementById("description_modele_3").innerHTML = tesla_3.brand + " "+ tesla_3.modele + ". " +  tesla_3.number_available + " car(s) available. " + tesla_3.price + " €"
let description_modele_x = document.getElementById("description_modele_x").innerHTML = tesla_x.brand + " "+ tesla_x.modele + ". " +  tesla_x.number_available + " car(s) available. " + tesla_x.price + " €"
let description_modele_y = document.getElementById("description_modele_y").innerHTML = tesla_y.brand + " "+ tesla_y.modele + ". " + tesla_y.number_available + " car(s) available. " + tesla_y.price + " €"
let description_cybertruck = document.getElementById("description_cybertruck").innerHTML = cybertruck.brand + " "+ cybertruck.modele + ". " + cybertruck.number_available + " car available. " + cybertruck.price + " €"

document.getElementById('text001').innerHTML = "Your order"
let total_price = 0
 

let add_1 = document.getElementById("add_1")
add_1.addEventListener("click", function (){
        tesla_s.addCar()
    })

let remove_1 = document.getElementById("remove_1")
remove_1.addEventListener("click", function (){
        tesla_s.removeCar()
    })

let add_2 = document.getElementById("add_2")
add_2.addEventListener("click", function (){
        tesla_3.addCar()
    })

let remove_2 = document.getElementById("remove_2")
remove_2.addEventListener("click", function (){
        tesla_3.removeCar()
    })

let add_3 = document.getElementById("add_3")
add_3.addEventListener("click", function (){
        tesla_x.addCar()
    })

let remove_3 = document.getElementById("remove_3")
remove_3.addEventListener("click", function (){
    tesla_x.removeCar()
})

let add_4 = document.getElementById("add_4")
add_4.addEventListener("click", function (){
        tesla_y.addCar()
    })

let remove_4 = document.getElementById("remove_4")
remove_4.addEventListener("click", function (){
        tesla_y.removeCar()
    })

let add_5 = document.getElementById("add_5")
add_5.addEventListener("click", function (){
        cybertruck.addCar()
    })

let remove_5 = document.getElementById("remove_5")
remove_5.addEventListener("click", function (){
        cybertruck.removeCar()
    })

