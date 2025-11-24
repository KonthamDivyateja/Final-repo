const greeting = () => console.log("Hello!");

const employee = {
    id: 1,
    greeting, 
    sayHi() { 
        console.log("Hi");
    }
};

employee.greeting(); 
employee.sayHi();   