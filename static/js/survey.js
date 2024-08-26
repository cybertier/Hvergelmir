let url = "https://85.215.38.177:9452";

const parseCookie = (str) =>
  str
    .split(";")
    .map((v) => v.split("="))
    .reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
    }, {});

function shuffleArrays(array1, array2) {
  for (var i = array1.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array1[i];
    array1[i] = array1[j];
    array1[j] = temp;
    temp = array2[i];
    array2[i] = array2[j];
    array2[j] = temp;
  }
}

function getSavedOrderDescriptions(relevant_cookie) {
  let key = relevant_cookie + "_descriptions";
  return JSON.parse(localStorage.getItem(key));
}
function getSavedOrderNames(relevant_cookie) {
  let key = relevant_cookie + "_names";
  return JSON.parse(localStorage.getItem(key));
}

function setSavedOrderDescriptions(relevant_cookie, value) {
  let key = relevant_cookie + "_descriptions";
  localStorage.setItem(key, value);
}
function setSavedOrderNames(relevant_cookie, value) {
  let key = relevant_cookie + "_names";
  localStorage.setItem(key, value);
}

function scramble_questions(descriptions, names, relevant_cookie) {
  var q1label = document.getElementById("q1l");
  var q2label = document.getElementById("q2l");
  var q3label = document.getElementById("q3l");
  var q4label = document.getElementById("q4l");
  var q5label = document.getElementById("q5l");

  //check if this has been shuffled before, if no shuffle, set as shuffled and save order, otherwise load order
  var cookies = parseCookie(document.cookie);
  already_shuffled = cookies[relevant_cookie];
  if (already_shuffled == "true") {
    //load shuffled order
    console.log("loading");
    descriptions = getSavedOrderDescriptions(relevant_cookie);
    names = getSavedOrderNames(relevant_cookie);
  } else {
    //shuffle order

    console.log("shuffling");

    document.cookie = relevant_cookie + "=" + true + "; SameSite=Strict";
    shuffleArrays(descriptions, names);

    var shuffle_descriptions = JSON.stringify(descriptions);
    var shuffle_names = JSON.stringify(names);

    //save form order
    setSavedOrderDescriptions(relevant_cookie, shuffle_descriptions);
    setSavedOrderNames(relevant_cookie, shuffle_names);
    console.log(shuffle_descriptions);
    console.log(shuffle_names);
  }

  //beschreibungen ändern
  q1label.innerHTML = descriptions[0];
  q2label.innerHTML = descriptions[1];
  q3label.innerHTML = descriptions[2];
  q4label.innerHTML = descriptions[3];
  q5label.innerHTML = descriptions[4];

  //radios umbenennen
  let radios = document.getElementsByName("radio_1");
  radios = Array.from(radios);
  radios.forEach((element) => {
    element.name = names[0];
  });

  radios = document.getElementsByName("radio_2");
  radios = Array.from(radios);
  radios.forEach((element) => {
    element.name = names[1];
  });

  radios = document.getElementsByName("radio_3");
  radios = Array.from(radios);
  radios.forEach((element) => {
    element.name = names[2];
  });

  radios = document.getElementsByName("radio_4");
  radios = Array.from(radios);
  radios.forEach((element) => {
    element.name = names[3];
  });

  radios = document.getElementsByName("radio_5");
  radios = Array.from(radios);
  radios.forEach((element) => {
    element.name = names[4];
  });
}

async function sendJSON(data) {
  // Default options are marked with *
  return fetch("https://hvergelmir.ddns.net:9452", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "no-cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "omit", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: data, // body data type must match "Content-Type" header
  });

}

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

function sendAllData(redirection_target, is_first) {
  console.log("sending all")
  Promise.all([
    //send personal
    sendJSON(localStorage.getItem("personal")),
    //send comprehension
    sendJSON(localStorage.getItem("comprehension")),
    //send comparisonA
    sendJSON(localStorage.getItem("comparison")),
    //send comparisonB
    // sendJSON(localStorage.getItem("comparisonB"))
  ]).then((values) =>
    window.location.assign(redirection_target + window.location.search)
  ).catch((values) =>{
      console.log("network error, could not submit");
      delay(1000).then(() =>  window.location.assign(redirection_target + window.location.search));
    }
    );
}
function sendFeedback(redirection_target) {
  console.log("sending feedback")
  Promise.all([
    //send personal
    sendJSON(localStorage.getItem("feedback")),
     ]).then((values) =>
    window.location.assign(redirection_target + window.location.search)
  ).catch((values)=>{
    console.log("network error, could not submit");
    delay(1000).then(() =>  window.location.assign(redirection_target + window.location.search));
  });
}



function saveDataAndSend(e, type, redirection_target, is_first) {
  e.preventDefault();
  var cookies = parseCookie(document.cookie);


  var form = document.forms.survey1;
  var formData = new FormData(form);
  var fromEntries = Object.fromEntries(formData);

  fromEntries.id = cookies.id;
  fromEntries.time = is_first;
  fromEntries.type = type;
  let project = urlParams.get("p");
  fromEntries.project = project;

  var formJson = JSON.stringify(fromEntries);
  localStorage.setItem("comparisonA", formJson);
  
  sendAllData(redirection_target);
}



function saveAndGenID(e, type, redirection_target, is_first){
  var id = Math.floor(Math.random()*1000000000000000)
  document.cookie = "id=" + id + "; SameSite=Strict"
  document.cookie = "compre_shuffled="  + false + "; SameSite=Strict"
  document.cookie = "compar_shuffled=" + false + "; SameSite=Strict"
  localStorage.clear();
  saveData(e, type, redirection_target, is_first, false);

  window.location.assign(redirection_target + window.location.search)}



function saveAndSendData(e, type, redirection_target, is_first) {
  saveData(e, type, redirection_target, is_first, false, true);
  if (is_first == "first"){
    saveAnswer();
  }
  sendAllData(redirection_target, is_first);
}

function saveAndSendFeedback(e, type, redirection_target, is_first) {
  saveData(e, type, redirection_target, is_first, false);

  sendFeedback(redirection_target)
}

function onToggleConsent(element){
  if (element.checked){
    let answer = confirm("Wollen sie ihre Zustimmung wirklich zurück nehmen? Ihre Daten können ohne ihre Zustimmung nicht verwendet werden");
    element.checked = answer
  }
}




function saveData(e, type, redirection_target, is_first, redirect = true, addBrowser=false) {
  e.preventDefault();

  //get id from cookies
  var cookies = parseCookie(document.cookie);

  //get form entries
  var form = document.forms.survey1;
  var formData = new FormData(form);
  var fromEntries = Object.fromEntries(formData);

  //complete form data
  fromEntries.id = cookies.id;
  fromEntries.time = is_first;
  fromEntries.type = type;
  let queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString);
  if (type=="personal"){
    fromEntries.ref = fromEntries.browser = urlParams.get("ref");
  }
  if (addBrowser){
    fromEntries.browser = urlParams.get("p");
    console.log("adding browser");
    console.log(fromEntries.browser);
  }
  var formJson = JSON.stringify(fromEntries);

  //save form input
  localStorage.setItem(type, formJson);
  console.log("saving data " + type);
  window.location.assign(redirection_target + window.location.search)
}



function saveAnswer(){
  var form = document.forms.survey1;
  var formData = new FormData(form);
  var fromEntries = Object.fromEntries(formData);
  var formJson = JSON.stringify(fromEntries);
  localStorage.setItem("firstanswer", formJson);
}


window.saveData = saveData;
window.scramble_questions = scramble_questions;
//window.saveDataAndGenID = saveDataAndSend;
window.saveAndSendData = saveAndSendData;
window.saveAndSendFeedback = saveAndSendFeedback;
window.saveAndGenID = saveAndGenID;
window.onToggleConsent = onToggleConsent;
