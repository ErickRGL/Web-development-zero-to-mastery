// Solve the below problems:

// #1) Convert the below promise into async await
fetch('https://swapi.co/api/starships/9/')
  .then(response => response.json())
  .then(console.log)

const myAsync = async function() {
  const response = await fetch('https://swapi.co/api/starships/9/');
  const data = await response.json();
  console.log(data);
}


// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
  try
  {
    const responseArray = await Promise.all(urls.map(url => fetch(url)));
    const data0 = await responseArray[0].json();
    const data1 = await responseArray[1].json();
    const data2 = await responseArray[2].json();
    console.log("data0",data0);
    console.log("data1",data1);
    console.log("data2",data2);
  } catch(err){
    console.log("oooooooops",err);
  }
}

// #3) Add a try catch block to the #2 solution in order to catch any errors.
// Now chnage one of the urls so you console.log your error with 'ooooooops'
