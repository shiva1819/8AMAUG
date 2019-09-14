var emp = [
    {"name":'x', "age":20, "salary":1000},
    {"name":'y', "age":30, "salary":2000},
]


// for, forEach, while, forin;


for(var i = 0; i < 2; i++){
    console.log(emp[i].salary);
}

emp.forEach(function(value,index,array){
    console.log(value.name);
})