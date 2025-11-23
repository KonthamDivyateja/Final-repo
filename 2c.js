const obj = {
    value: 50,
    test: function () { 
        console.log(this.value); 
    }
};
obj.test(); 