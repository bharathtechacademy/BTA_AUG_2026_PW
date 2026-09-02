//Array : This is the data type that can store a list of values. 

//1. Storing the values within the array 
console.log("1. Storing the values within the array");
let fruits: string[] = ["Apple", "Banana", "Mango", "Orange"];
let prices: number[] = [250, 80, 200, 190];
let fruitsAndPrices: (string | number)[] = ["Apple", 100, "Banana", 200, "Mango", 300, "Orange", 400];
console.log(fruits);
console.log(prices);
console.log(fruitsAndPrices);

//2. Accessing the values from the array
console.log("2. Accessing the values from the array");
console.log(fruits[0]);
console.log(prices[1]);
console.log(fruitsAndPrices[2]);

//3. Adding additional values to the existing array at the end  
console.log("3. Adding additional values to the existing array at the end (push)");
fruits.push("Grapes");
console.log(fruits);

//4. Remove the existing value from the array at the end. 
console.log("4. Remove the existing value from the array at the end (pop)");
fruits.pop();
console.log(fruits);

//5. Adding additional values to the existing array at the begining 
console.log("5. Adding additional values to the existing array at the begining (unshift)");
fruits.unshift("Grapes");
console.log(fruits);

//6. Remove the existing value from the array at the begining. 
console.log("6. Remove the existing value from the array at the begining (shift)");
fruits.shift();
console.log(fruits);

//7. Adding & Removing additional values to the existing array in middle
console.log("7. Adding & Removing additional values to the existing array in middle (splice)");
//Syntax : array.splice(index,num-of-values-to-be-deleted,values-to-be-added);
fruits.splice(1, 0, 'Grapes', 'Papaya', 'Jack fruit');
console.log(fruits);

//8. Find the index of a specific value within the array. (Find whether a specific value is present or not. )
console.log("8. Find the index of a specific value within the array. (indexOf)");
console.log(fruits.indexOf("Mango"));
console.log(fruits.indexOf("Kiwi"));

//9. Create a new array by extracting part of the values from the existing array.
console.log("9. Create a new array by extracting part of the values from the existing array.(slice)");
let newArray = fruits.slice(1, 5);
console.log(newArray);

//10. Create a new array by merging two different arrays.
console.log("10. Create a new array by merging two different arrays.(concat)");
let veggies: string[] = ["Onion", "Tomato", "Potato"];
let fruitsAndVeggies: string[] = fruits.concat(veggies);
console.log(fruitsAndVeggies);

//11. Iterating all the values from the array 
console.log("11. Iterating all the values from the array (for...of)");
for (let val of fruits) {
    console.log(val);
}

//12. Reverse the values within the array. 
console.log("12. Reverse the values within the array. ")
console.log(fruits);//original
fruits.reverse();
console.log(fruits);//after reversing

//13. Sort /Arrange the values in the order. 
console.log("13. Sort /Arrange the values in the order.")
console.log(prices);//original
prices.sort((a, b) => b - a); //Descending order
console.log(prices);//after sorting into descending order
prices.reverse();
console.log(prices);


let numb : number [] = [1,2,4,5];
let output : number []  =[]
for(let val of numb){
    if(val%2==0){
        output.push(val);
    }
}
console.log(output);

