const btn = document.querySelector(".js-get-data");

// btn.addEventListener("click", getUrl);

// function getUrl() {
//   // return fetch("https://api.monobank.ua/bank/currency");
//   return fetch("https://the-cocktail-db.p.rapidapi.com/search.php'");
//   //   fetch(
//   //     "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits"
//   //   );
// }

// let promise = fetch(url, {
//   method: "GET", // POST, PUT, DELETE та інші
//   headers: {
//     // значення цього заголовку зазвичай встановлюється автоматично,
//     // залежно від тіла запиту
//     "Content-Type": "text/plain;charset=UTF-8",
//   },
//   body: undefined, // string, FormData, Blob, BufferSource або URLSearchParams
//   referrer: "about:client", // або "", щоб не посилати заголовок Referer,
//   // або URL з поточного джерела
//   referrerPolicy: "no-referrer-when-downgrade", // no-referrer, origin, same-origin...
//   mode: "cors", // same-origin, no-cors
//   credentials: "same-origin", // omit, include
//   cache: "default", // no-store, reload, no-cache, force-cache або only-if-cached
//   redirect: "follow", // manual, error
//   integrity: "", // контрольна сума, наприклад "sha256-abcdef1234567890"
//   keepalive: false, // true
//   signal: undefined, // AbortController, щоб перервати запит
//   window: window, // null
// });

// async/await

// async function a() {
//   return true;
// }

// a().then(console.log);

// let value = await promise
// async function a() {
//   let prom = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Hello"), 1000);
//   });

//   let result = await prom;

//   console.log(result);
// }

// a();

// function b (){
//     let result = await promise
// }

// return fetch("https://api.monobank.ua/bank/currency");

// const monocurrency = async () => {
//   let response = await fetch(
//     "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits"
//   );

//   if (response.ok) {
//     console.log("Ok");
//     console.log("response", response.json());
//   } else {
//     console.log("Err: ", response.stteatus);
//   }
// };

// monocurrency();

// const headers = new Headers({
//   "Content-Type": "application/json",
//   "X-Custom-Header": "custom value",
// });

// headers.has("Content-Type")

// const postTest = async () => {
//   let user = {
//     name: "Ivan",
//     city: "Kyiv",
//   };

//   let response = await fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
// };

// try {
//   console.log("Start");
//   a;
//   console.log("Finish");
// } catch (err) {
//   console.log("Errr");
// }

// try {
//   setTimeout(function () {
//     da;
//   }, 1000);
// } catch (err) {
//   console.log("Errr");
// }

// setTimeout(function () {
//   try {
//     da;
//   } catch (err) {
//     console.log("Errr");
//   }
// }, 1000);

// try {
//   da;
// } catch (err) {
//   console.log(err.stack);
// }

// let json = `{"name": "Ann"}`;

// try {
//   let user = JSON.parse(json);
//   // if (!user.city) {
//   //   throw new SyntaxError("Нема міста");
//   // }
//   console.log("start");
// } catch (err) {
//   console.log("Err", err.message);
// } finally {
//   console.log("finally");
// }

// let socket = new WebSocket(
//   "wss://javascript.info/article/websocket/demo/hello"
// );

// socket.onopen = function (e) {
//   console.log("З*єднання встановленно");
//   socket.send("Привіт");
//   socket.send("Я Христя");
// };

// socket.onmessage = function (e) {
//   console.log("message", e.data);
// };

// socket.onclose = function (event) {
//   if (event.wasClean) {
//     console.log("Зупинено", event.code);
//   } else {
//     console.log("Poзірвано");
//   }
// };

// socket.onerror = function (err) {
//   console.log(err);
// };
