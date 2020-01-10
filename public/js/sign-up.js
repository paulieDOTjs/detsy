const setUpShopBtnEl = document.getElementById("set-up-shop");
const shopImageEl = document.getElementById("shop-image")
const shopNameEl = document.getElementById("shop-name")
const shopDescriptionEl = document.getElementById("shop-description")
const shopEmailEl = document.getElementById("email-address");
const usernameEl = document.getElementById("user-name");
const userPasswordEl = document.getElementById("password");
// add event listener to setUpShopBtnEl that ...
setUpShopBtnEl.addEventListener("click", function() {
  const shopImage = shopImageEl.value;
  const shopName = shopNameEl.value;
  const shopDescription = shopDescriptionEl.value;
  const email = shopEmailEl.value;
  const username = usernameEl.value;
  const password = userPasswordEl.value;

  // eslint-disable-next-line no-undef
  axios
    .post("/api/signup", {
      shopImage,
      shopName,
      shopDescription,
      email,
      username,
      password
    })
    .then(res => console.log(res.data));

  //   fetch("/api/signup", {
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     method: "POST",
  //     body: JSON.stringify({
  //       username,
  //       email,
  //       password,
  //       shopName,
  //       shopDescription,
  //       shopImage
  //     })
  //   })
  //     .then(res => res.json())
  //     .then(data => console.log(data));
});
// adds input information into an object that can be added to the database
