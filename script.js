// Soal 2
let country = document.getElementById("list-bendera");
let countryApi = `https://restcountries.eu/rest/v2/all`;

// Promise
fetch(countryApi, { method: "GET" })
  .then((result) => result.json())
  .then((result) => {
    console.log(result);

    for (let i = 0; i <= 250; i++) {
      country.innerHTML += `<div id="bendera">
      <img src=${result[i].flag} />
      <span>${result[i].name}</span>
    </div>`;
    }
  })
  .catch((err) => {
    console.log(err);
  });

// SEDANG DIKERJAKAN

// // Soal 1
// let bangAuzan = document.getElementById("profilAuzan");
// let API = `https://api.github.com/users/auzanassdq`;

// Promise
// fetch(API, { method: "GET" })
//   .then((result) => result.json())
//   .then((result) => {
//     console.log(result);

//     for (let i = 0; i <= 10; i++) {
//       bangAuzan.innerHTML += `<div id="auzan">
//       <nama=${result[i].login} />
//       <followers=${result[i].followers}</>
//     </div>`;
//     }
//   })
//   .catch((err) => {
//     console.log(err);
//   });
