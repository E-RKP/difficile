const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}


let max = 0
let npersone = Object.keys(users)
for (i=0; i<npersone.length;i++){

  let nskill = users[npersone[i]].skills.length
  if (nskill > max){
    max = nskill;
  }
}
for (i=0; i<npersone.length;i++){
  if (max === users[npersone[i]].skills.length)
    console.log(users[npersone[i]])
}

let counter = 0
for (i=0; i<npersone.length;i++){
  if (users[npersone[i]].isLoggedIn === true){
    counter++;
  }
  
}
console.log(counter)

let counterp = 0
for (i=0; i<npersone.length;i++){
  if (users[npersone[i]].isLoggedIn === true && users[npersone[i]].points >= 50){
    counterp++;
  }
}
console.log(counterp)

let counterm=0
for (i=0; i<npersone.length;i++){
  
 if (users[npersone[i]].skills.includes('JavaScript') && users[npersone[i]].skills.includes('MongoDB') && users[npersone[i]].skills.includes('React') && users[npersone[i]].skills.includes('Node')){
  counterm++;
 }
}
console.log(`Ci sono ${counterm} MERN developer nel gruppo`)