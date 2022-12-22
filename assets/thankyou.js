
let formFields = new
URLSearchParams(window.location.search)

dococument.querySelector("#yourName").innerHTML ='${formFields.get("name")}'
document.querySelector("#yourEmail").innerHTML = '${formFields.get("email")}'
