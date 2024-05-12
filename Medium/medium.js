function dividePizza(totalSlices, totalPeople) {
    const slicesPerPerson = totalSlices / totalPeople;
    const orderSlices = slicesPerPerson.toFixed(2); // toFixed(2) rounds the result to two decimal places
    return `Each person gets ${orderSlices} slices of pizza; from our ${totalSlices} slice pizza`;
  }
  
  // Usage:
  console.log(dividePizza(8, 2)); 
  console.log(dividePizza(8, 3)); 
  console.log(dividePizza(21, 20)); 
  console.log(dividePizza(10, 3));