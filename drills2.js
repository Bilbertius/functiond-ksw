const jediName = (firstName, lastName) =>{
   let first= firstName.slice(0,2);
    let last =lastName.slice(0,3);
    let final= `${last}${first}`;
    console.log(final)
}


jediName("Beyonce", "Knowles")
