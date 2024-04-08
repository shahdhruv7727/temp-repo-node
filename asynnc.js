function someAsyncOperation() {
    setTimeout(()=> {
        console.log("Premika");
    }, 4000);
  }


  async function example() {
      console.log('Start');
      await someAsyncOperation(); // This operation is awaited
      await console.log('End');
  }
  
  function anotherFunction() {
      console.log('Another function');
  }



  example()
  anotherFunction()