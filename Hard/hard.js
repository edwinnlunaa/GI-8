function generatePatient(name, ssn) {
    const PII = {
      name: name,
      SSN: ssn
    };
  
    return {
      getName: function() {
        return PII.name;
      },
      getSSN: function() {
        return undefined;
      }
    };
  }
  
  // Example usage:
  // Create a patient object
  const patient1 = generatePatient("John", "123-45-6789");
  
  
  console.log(patient1.name); //  Undefined
  console.log(patient1.SSN); //   Undefined
  
  // public functions
  console.log(patient1.getName()); //  Alice
  console.log(patient1.getSSN()); //   Undefined