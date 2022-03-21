const animalArray = ['dog', 'cat', 'pig'];

animalArray.push('cow');

const profileDataArr = [
     'Floyd' , 'Web Developer'
    
];



// Notice the lack of parentheses around the 'profileDataArr' parameter?

const printProfileData = (profileDataArr) => {
  for (let i = 0; i < profileDataArr.length; i+= 1) { 
    console.log(profileDataArr[i]);
  }
  console.log('===========');
  // is the same as this...
  profileDataArr.forEach((profileItem) => {
    console.log(profileItem)
  });


};
    printProfileData(profileDataArr);