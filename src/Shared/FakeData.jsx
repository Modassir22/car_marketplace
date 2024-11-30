import { faker } from '@faker-js/faker'

function createRandomCarList(){
    return{
        name:faker.vehicle.vehicle(),
        fuelType:faker.vehicle.fuel(),
        type:faker.vehicle.type(),
        model:faker.vehicle.model(),
        image:'https://th.bing.com/th/id/OIP.DAdfJo6_lBAzh0Frq9DYGQHaEK?w=268&h=180&c=7&r=0&o=5&pid=1.7',
        gearType:'Automatic',
        miles:1000,
        price:faker.finance.amount({min:4000 , max:20000})
    };
}

const carList = faker.helpers.multiple(createRandomCarList,{
    count:7
})

export default{ 
    carList
}