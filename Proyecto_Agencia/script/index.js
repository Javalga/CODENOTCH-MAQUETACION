const usersDataCollection = [];
const dataSaver = () => {
  let userData = {
    name: document.getElementById("name").value,
    origin: document.getElementById("origin").value,
    destiny: document.getElementById("destiny").value,
    persons_amount: document.getElementById("persons_amount").value,
    date: document.getElementById("date").value,
  };
  usersDataCollection.push(userData);
  document.getElementById("myForm").reset();
  console.log(usersDataCollection);
};

const filter = () => {
  let info_container_var = document.getElementById("info_container");
  let injectString = "";
  for (let request of usersDataCollection) {
    if (
      request.destiny.toLowerCase() === "canarias" ||
      request.destiny.toLowerCase() === "mallorca" ||
      request.destiny.toLowerCase() === "galicia"
    ) {
      console.log(request);
      info_container_var.style.visibility = "visible";
      injectString += `<p>${request.name} fue el dia ${request.date} a ${request.destiny}</p><br/>`;
      console.log(injectString);
    }
  }
  info_container_var.innerHTML = injectString;
};
