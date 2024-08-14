const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Asynchronous Task 1");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

const Promise1 = new Promise((res, rej) => {
  setTimeout(() => {
    console.log("Practicing Promise again");
    res()
  })
})
Promise1.then(function () {
  console.log("new Promise consumed");
  
})

/* In JavaScript, promises are objects used to handle asynchronous operations. 
They represent a value that may be available now, or in the future, or never. 
Promises are widely used in modern JavaScript for handling asynchronous tasks,
like fetching data from a server, reading files, or any operation that might take some time to complete. */

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Asynchronous Task 2");
  }, 1000);
}).then(() => {
  console.log("Asynchronous Resolved");
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "Ram", email: "ramlikestocode@gmail.com" });
  }, 1000);
});

promiseThree.then((userData) => {
  console.log(userData);
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ codingLanguage: "javascript", courseDurationInMonths: 8 });
    } else {
      reject("Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((userData) => {
    console.log(userData);
  })
  .then(() => {});
