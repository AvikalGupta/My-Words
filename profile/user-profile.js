var userProfileImgSrc = "dp-img\\" + proInfo[1] + ".jpg";


var title = document.querySelector("title");
var Name = document.getElementById("proName");
var id = document.getElementById("proId");
var articles = document.getElementById("proArticles");
var qualification = document.getElementById("proQualification");
var mail = document.getElementById("proMail");
var mobileNumber = document.getElementById("proMobileNumber");
var userProfileImg = document.getElementById("userProfileImg");
userProfileImg.src = userProfileImgSrc;
userProfileImg.alt = proInfo[0];

title.textContent = proInfo[0];
Name.textContent = proInfo[0];
id.textContent = proInfo[1];
articles.textContent = proInfo[2];
qualification.textContent = proInfo[3];
mail.textContent = proInfo[4];
mobileNumber.textContent = proInfo[5];
