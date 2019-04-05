// ==== Arrays ====

// Given an array of college graduates.  Complete the following requests WITHOUT using any array methods like .forEach(), .map(), .reduce(), .filter()

const graduates = [{"id":1,"first_name":"Cynde","university":"Missouri Southern State College","email":"ctorry0@macromedia.com"},
{"id":2,"first_name":"Saundra","university":"The School of the Art Institute of Chicago","email":"swhal1@state.gov"},
{"id":3,"first_name":"Lambert","university":"Marian College","email":"lparham2@techcrunch.com"},
{"id":4,"first_name":"Modestine","university":"International Medical & Technological University","email":"mdolder3@symantec.com"},
{"id":5,"first_name":"Chick","university":"Sultan Salahuddin Abdul Aziz Shah Polytechnic","email":"camorts4@google.com.au"},
{"id":6,"first_name":"Jakob","university":"Fachhochschule Rosenheim, Hochschule für Technik und Wirtschaft","email":"jharken5@spiegel.de"},
{"id":7,"first_name":"Robbi","university":"Salem University","email":"rbrister6@redcross.org"},
{"id":8,"first_name":"Colline","university":"Coastal Carolina University","email":"cbrosh7@alibaba.com"},
{"id":9,"first_name":"Michail","university":"Universidad Católica de Ávila","email":"mrome8@shinystat.com"},
{"id":10,"first_name":"Hube","university":"Universitat Rovira I Virgili Tarragona","email":"hlethbrig9@foxnews.com"}]

/* Request 1: Create a new array called universities that contains all the univeristies in the graduates array.  

Once you have the new array created, sort the universities alphabetically and log the result. */

const universities = [];

for (let i = 0; i < graduates.length; i++){
  universities.push(graduates[i].university)
}

console.log(universities)

/* Request 2: Create a new array called contactInfo that contains both first name and email of each student. 

The resulting contact information should have a space between the first name and the email information like this: 
Name email@example.com

Log the result of your new array. */

const contactInfo = [];

for (let i = 0; i < graduates.length; i++){
  contactInfo.push(graduates[i].first_name)
  contactInfo.push(graduates[i].email)
}

console.log(contactInfo);


/* Request 3: Find out how many universities have the string "Uni" included in their name. Create a new array called uni that contains them all. Log the result. */

const uni = [];

for (let i = 0; i < graduates.length; i++) {
  if (graduates[i].university.includes("Uni")){
    uni.push(graduates[i]);
  }
}

console.log(uni);

// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: Closures allow internal functions to accept external information internally.


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}