/*
Using multiple properties from an object.
Using the same property multiple times.
Using a property that is deeply nested in an object.
*/

const employee = {name: ‘ANE01’, email: ‘Anna@example.com’, phone:’0112–345–6789'};
//with destucturing
const {name, email, phone} = employee;
//without destucturing
const name = employee.name;
const email = employee.email;
const phone = employee.phone;

/*
Also, it improves the application performance since there is no need to create object parameters or collect garbage.
*/

//recommended
function CustomerDetail (CustomerName, CustomerType, Order){    
  console.log('This is ${CustomerName} of ${CustomerType} and need ${Order}');
} 
//not-recommended
function CustomerDetail (User){    
  console.log('This is ${User.CustomerName} of ${User.CustomerType} and need ${User.Order}');
}


// Avoid Mental Mapping , Explicit is better than implicit.

// Bad 
const locations = ["Austin", "New York", "San Francisco"];
locations.forEach(l => {
  doStuff();
  doSomeOtherStuff();
  // ...
  // ...
  // ...
  // Wait, what is `l` for again?
  dispatch(l);
});

// Good

const locations = ["Austin", "New York", "San Francisco"];
locations.forEach(location => {
  doStuff();
  doSomeOtherStuff();
  // ...
  // ...
  // ...
  dispatch(location);
});



// We will read more code than we will ever write. It's important that the code we do write is readable and searchable. By not naming variables that end up being meaningful for understanding our program, we hurt our readers. Make your names searchable. Tools like buddy.js and ESLint can help identify unnamed constants.
// Bad:

// What the heck is 86400000 for?
setTimeout(blastOff, 86400000);

// Good:

// Declare them as capitalized named constants.
const MILLISECONDS_PER_DAY = 60 * 60 * 24 * 1000; //86400000;
setTimeout(blastOff, MILLISECONDS_PER_DAY);


// Use explanatory variables
// Bad:

const address = "One Infinite Loop, Cupertino 95014";
const cityZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
saveCityZipCode(
  address.match(cityZipCodeRegex)[1],
  address.match(cityZipCodeRegex)[2]
);

// Good:

const address = "One Infinite Loop, Cupertino 95014";
const cityZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
const [_, city, zipCode] = address.match(cityZipCodeRegex) || [];
saveCityZipCode(city, zipCode);

