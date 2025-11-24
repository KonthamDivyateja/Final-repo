const user = {
    name: "Alex",
    address: {
        city: "Bangalore"
    }
};

const city = user.address?.city;

console.log(city); 