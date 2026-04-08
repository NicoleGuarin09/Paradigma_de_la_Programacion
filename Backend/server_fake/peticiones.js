//Esto es GET
var settings = {
  "url": "http://localhost:3000/Modelos%20de%20Carros",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

//Esto es GET

var settings = {
  "url": "http://localhost:3000/Modelos%20de%20Carros",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

// Esto es POST
var settings = {
  "url": "http://localhost:3000/Modelos%20de%20Carros",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "id": "09xt",
    "last name": "Deifords",
    "ip_adress": "9.21.6.120"
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

//Esto es POST
var settings = {
  "url": "http://localhost:3000/Modelos%20de%20Carros",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "id": "09xt",
    "last name": "Forts",
    "ip_adress": "9.21.60.05"
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

//Esto es POST
var settings = {
  "url": "http://localhost:3000/Modelos%20de%20Carros",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "id": "09xt",
    "last name": "Capibara",
    "ip_adress": "89.35.60.05"
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

//Esto es Put
var settings = {
  "url": "http://localhost:3000/Modelos%20de%20Carros/c23b",
  "method": "PUT",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "Carros": "Topaz",
    "Formula": null,
    "last_name": "Newbold",
    "email": "Milvago chimachima",
    "gender": "Mally",
    "ip_address": "90.156.205.39",
    "company": "Babbleset",
    "id": "c23b"
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

//Esto es  PUT
var settings = {
  "url": "http://localhost:3000/Modelos%20de%20Carros/d027 ",
  "method": "PUT",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "Carros": "LeMans",
    "Formula": null,
    "last_name": "RAFINHA",
    "email": "Odocoileus hemionus",
    "gender": "Agender",
    "ip_address": "26.17.1.12",
    "company": "Feedspan",
    "id": "d027"
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

//Esto es PUT
var settings = {
  "url": "http://localhost:3000/Modelos%20de%20Carros/c569",
  "method": "PUT",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "Carros": "Avanti",
    "Formula": null,
    "last_name": "Santos",
    "email": "Psittacula krameri",
    "gender": "Female",
    "ip_address": "10.161.43.33",
    "company": "Tambee",
    "id": "c569"
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

//Esto es DELETE
var settings = {
  "url": "http://localhost:3000/Modelos%20de%20Carros/24cf",
  "method": "DELETE",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

//Esto es DELETE
var settings = {
  "url": "http://localhost:3000/Modelos%20de%20Carros/0083",
  "method": "DELETE",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});