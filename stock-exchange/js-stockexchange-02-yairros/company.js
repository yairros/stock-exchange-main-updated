
const Params = new URLSearchParams(window.location.search);
const companySymbol = Params.toString().slice(7);
console.log(companySymbol);
const symbol = Params.get('symbol');
console.log(symbol)
const spinner = document.getElementById('spinner');
spinner.style.display = 'block';


async function getProfile() {
  const response = await fetch(`https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/${companySymbol}`);
  const profileData = await response.json();
  presentProfile(profileData);
}

getProfile();

const price = document.getElementById("USD");
const image = document.getElementById("image");

function presentProfile(profileData) {
  let companyName = profileData.profile.companyName;
  let description = profileData.profile.description;
  let website = profileData.profile.website;
  let price = profileData.profile.price;
  let percentage = profileData.profile.changesPercentage;
  let money = profileData.profile.currency;
  console.log(companyName);
  console.log(image);
  console.log(description);
  console.log(website);
  console.log(profileData)

  document.getElementById("companyname").innerHTML = companyName;
  image.innerHTML = `<p><img src=${profileData.profile.image}></p>`;
  document.getElementById("description").innerHTML = description;
  document.getElementById("link").innerHTML = website;
  document.getElementById("USD").innerHTML = price;
  change.innerHTML = `<p>${percentage}%</p>`;
  document.getElementById("currency").innerHTML = money;


  if (percentage > 0) {
    document.getElementById("change").style.color = "green";
  } else if (percentage < 0) {
    document.getElementById("change").style.color = "red";
  } else {
    document.getElementById("change").style.color = "none";
  }
}

fetch(`https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/historical-price-full/${companySymbol}?serietype=line`)
  .then((data) => data.json())
  .then((data) => {
    let prices = []
    let dates = []
    for (let i = 0; i < data.historical.length; i++) {
      prices.push(data.historical[i].close);
      dates.push(data.historical[i].date);
    }

    let ctx = document.getElementById('myChart');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: dates.reverse(),
        datasets: [
          {
            label: "Stock Price History",
            data: prices.reverse(),
            borderWidth: 1
          }]
      }
    })
  })
