function clearForm()
{
  setTimeout(this,1000);
  document.getElementById("controls").reset();
}
function searchUser() {
  var input = document.getElementById("IDValue").value;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      printTable(this);
      
    }
    
  };
  xhttp.open("GET", "/testb/Informasjon/"+input, true);
  xhttp.send();
}
function addUser() {
  var input = document.getElementById("IDValue").value;
  var inputName = document.getElementById("NameValue").value;
  var inputTlf = document.getElementById("TlfValue").value;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    }
  };
  xhttp.open("POST", "/testb/Informasjon/", true);
  xhttp.send("<Informasjon><ID>"+input+"</ID><Navn>"+inputName+"</Navn><Telefon>"+inputTlf+"</Telefon></Informasjon>");
}
function deleteUser() {
  var input = document.getElementById("IDValue").value;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      
    }
  };
  xhttp.open("DELETE", "/testb/Informasjon/"+input, true);
  xhttp.send();
}
function updateUser() {
  var input = document.getElementById("IDValue").value;
  var inputName = document.getElementById("NameValue").value;
  var inputTlf = document.getElementById("TlfValue").value;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     
    }
  };
  xhttp.open("PUT", "/testb/Informasjon/"+input, true);
  xhttp.send("<Informasjon><ID>"+input+"</ID><Navn>"+inputName+"</Navn><Telefon>"+inputTlf+"</Telefon></Informasjon>");
}
function printTable(xml)
{
   var i;
  var xmlDoc = xml.responseXML;
  var table="<tr bgcolor=\"#006699\"><th>ID</th><th>Navn</th><th>Telefon</th></tr>";
  var x = xmlDoc.getElementsByTagName("Informasjon");
  for (i = 0; i <x.length; i++) { 
    table += "<tr bgcolor=\"#1ac6ff\"><td>" +
    x[i].getElementsByTagName("ID")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Navn")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Telefon")[0].childNodes[0].nodeValue
    "</td></tr>";
  }
  document.getElementById("demo").innerHTML = table;

}
