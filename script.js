//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    donatePrompt;
	
var newParagraph1 = document.createElement("p");
var newParagraph2 = document.createElement("p");
var newParagraph3 = document.createElement("p");
var donationHeading = document.createElement("h3");
document.getElementById("ConsoleDisplay").appendChild(newParagraph1);
document.getElementById("ConsoleDisplay").appendChild(newParagraph2);
document.getElementById("ConsoleDisplay").appendChild(newParagraph3);
document.getElementById("ConsoleDisplay").appendChild(donationHeading);


document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  "use strict";
  var donateAmount = prompt("How much would you like to donate?");
  if (donateAmount < 100) {
	  donationHeading.innerHTML = ('Thank you for your donation of ' + '$' + donateAmount);
	  donationHeading.style.color = "#FFFFFF";
	  }
  else if (donateAmount >= 100) {
	  donationHeading.innerHTML = "Thank you for your very generous donation!";
	  donationHeading.style.color = "#DB152C";
      var myArticles = document.getElementsByTagName('article');
      for(var i = 0; i < myArticles.length; i += 1) {
		  myArticles[i].className = "generous-donation";
		  }
     }
});



document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  "use strict";
  newParagraph1.innerHTML = ('This speech was written by ' + speechesArray[0].author + ' in ' + speechesArray[0].year);
  

  
  if(speechesArray[0].yearIsBCE === true){
    newParagraph2.innerHTML = ('This speech took place before the common era.');
  }else{
    newParagraph2.innerHTML = ('This speech took place during the common era.');
  }

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[0].year === oldest){
    newParagraph3.innerHTML = ('This is the oldest speech on the page.');
  }
  if(speechesArray[0].year === newest){
    newParagraph3.innerHTML = ('This is the most recent speech on the page.');
  }
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  "use strict";
  newParagraph1.innerHTML = ('This speech was written by ' + speechesArray[1].author + ' in ' + speechesArray[1].year);

  if(speechesArray[1].yearIsBCE === true){
    newParagraph2.innerHTML = ('This speech took place before the common era.');
  }else{
    newParagraph2.innerHTML = ('This speech took place during the common era.');
  }

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[1].year === oldest){
    newParagraph3.innerHTML = ('This is the oldest speech on the page.');
  }
  if(speechesArray[1].year === newest){
    newParagraph3.innerHTML = ('This is the most recent speech on the page.');
  }
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  "use strict";
  newParagraph1.innerHTML = ('This speech was written by ' + speechesArray[2].author + ' in ' + speechesArray[2].year);

  if(speechesArray[2].yearIsBCE === true){
    newParagraph2.innerHTML = ('This speech took place before the common era.');
  }else{
    newParagraph2.innerHTML = ('This speech took place during the common era.');
  }

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[2].year === oldest){
    newParagraph3.innerHTML = ('This is the oldest speech on the page.');
  }
  if(speechesArray[2].year === newest){
    newParagraph3.innerHTML = ('This is the most recent speech on the page.');
  }
});