const rightNavEl = document.getElementById('rightNav')

let userData;

axios
  .get("/api/user_data")
  .then(function (response) {
    console.log(response);
    userData = response.data.username;
    console.log(userData);
    renderGreeting();
  })

function renderGreeting(){
  if (userData === undefined){
    return
  } else {
    const username = document.createElement('p');
    username.innerHTML = `Hello, ${userData}`
    rightNavEl.prepend(username);
  }
}
