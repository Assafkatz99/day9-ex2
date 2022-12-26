let starting_fuel_level = 0
let num_of_ast_aboard 
let alt_the_shtl_reach

// 1)
function  f1() {
    let count = 1
    while (count <= 10){
        console.log(count);
        count ++
    }
}

// 2)
function  f2() {
    let count = 2
    while (count <= 10){
        console.log(count);
        count += 2
    }
}

// 3)
function  f3() {
    let count = 1
    while (count <= 10){
        console.log(count);
        count += 2
    }
}

// 4)
function  f4() {
    let count = 10
    while (count > 0){
        console.log(count);
        count --
    }
}

// 5)
function  f5() {
    let count = 1
    let num = prompt("please enter a num")
    while (count <= num){
        console.log(count);
        count ++
    }
}

// 6)
function  f6() {
    let count = 1
    let sum = 0
    let num = prompt("please enter a num")
    while (count <= num){
        sum += count
        count ++
    }
    console.log(sum);
}

// 7)
function  f7() {
    let count = 1
    let resault = 1
    let num = prompt("please enter a num")
    while (count <= num){10
        resault *= count
        count ++
    }
    console.log(resault);
}

// 8)
function f8 (){
    while (starting_fuel_level < 5000 || starting_fuel_level >30000){
        starting_fuel_level = prompt("Please enter starting fuel level")
    }
}

