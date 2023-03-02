//means nested callbacks in an asynchronous code

//CALL BACK HELL

setTimeout(() => {
  console.log(`1 second gone`);
  setTimeout(() => {
    console.log(`2 seconds gone`);
    setTimeout(() => {
      console.log(`3 seconds gone`);
      setTimeout(() => {
        console.log(`4 seconds gone`);
      }, 3000);
    }, 2000);
  }),
    1000;
}, 500);
