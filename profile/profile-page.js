var enteredId = 0;
var searchID = document.getElementById("searchID");
searchID.addEventListener("keyup", function(event){
    if(event.which === 13){
        searchProfile();
    }
});

function searchProfile(){
    var searchIdVal = parseInt(document.getElementById("searchID").value);
    enteredId = searchIdVal;
    if(searchIdVal <= 202014 && searchIdVal >= 202001){
        var profileLink = "file:///F:/my-words/profile/" + searchIdVal + ".html";
        // alert("link :- " + profileLink);
        searchID.value = "";
        window.location = profileLink;
    }
    else{
        searchID.value = "";
        alert("My Words ID didn't matched with any account");
    }
}

// var Name = document.getElementById("proName");
// var id = document.getElementById("proId");
// var articles = document.getElementById("proArticles");
// var qualification = document.getElementById("proQualification");
// var mail = document.getElementById("proMail");
// var mobileNumber = document.getElementById("proMobileNumber");
// Name.textContent = proInfo[0];
// id.textContent = proInfo[1];
// articles.textContent = proInfo[2];
// qualification.textContent = proInfo[3];
// mail.textContent = proInfo[4];
// mobileNumber.textContent = proInfo[5];
