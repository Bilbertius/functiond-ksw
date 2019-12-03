const jediName = (firstName, lastName) =>{
   let first= firstName.slice(0,2);
    let last =lastName.slice(0,3);
    let final= `${last}${first}`;
    console.log(final)
}


//jediName("Kraig", "Williams")

const beyond = num =>{
   if(num === Infinity || num === Number.NEGATIVE_INFINITY){
console.log("And beyond")
}
else if ( Number.isFinite(num) && Math.sign(num) ==1 ){
    console.log("To infinity");
}
else if (Number.isFinite(num) && Math.sign(num) == -1){
    console.log("To negative infinity")
}
else if (num ===0){
    console.log("Staying home")
}

} 
beyond(0);




