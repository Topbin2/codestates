class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "ellie" && password === "dream") ||
          (id === "coder" && password === "academy")
        ) {
          resolve(id);
        } else {
          reject(new Error("not found"));
        }
      }, 1000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "ellie") {
          resolve({ name: "ellie", role: "admin" });
        } else {
          reject("no access");
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();

const id = "coder";
const password = "academy";

userStorage.loginUser(id, password)
.then((user) => userStorage.getRoles(user))
.catch((err) => console.log(err))
.then((user) => console.log(user))
.catch((err) => console.log(err))


// 코드의 가독성이 너무 떨어짐.
// 에러가 발생하거나 디버깅을 할 경우, 어려움
// 유지보수 어려움

// const promise = new Promise((resolve, reject) => {
//   console.log("doing something");

//   const time = setTimeout(() => {
//     resolve('ellie');
//     reject(new Error("no network"));
//   }, 2000);

// });

// promise
//   .then((value) => console.log(value))
//   .catch((err) => console.log(err))
//   .finally(() => console.log('final'))

// const fetchNumber = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 1000);
// })

// fetchNumber
// .then((num) => num * 2)
// .then((num) => num * 3)
// .then((num) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(num - 1);
//     }, 1000)
//   })
// })
// .then(num => console.log(num))

// const getHen = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(1), 1000);
//   });
// };

// const getEgg = (num) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(num), 1000);
//   });
// };

// const cook = (num) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(num), 1000);
//   });
// };

// getHen() //
//   .then((num) => getEgg(num))
//   .then((num) => cook(num))
//   .then(num => console.log(num));
