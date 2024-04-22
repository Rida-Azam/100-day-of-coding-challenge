
//#################  DAY 50 CHALLENGE ################

 //                    QUESTION#149
 
 console.log("Start");

setTimeout(() => {
  console.log("Callback executed"); // This gets queued to be executed by the event loop
}, 0);

console.log("End");