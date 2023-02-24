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
