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

users.Luca = {}
console.log(users)


    const utenti = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];
    
    
    function SignUp (){

      const newUtente = {
        _id: 'nevni', //(qualcosa.value)
        username: 'Luca',
        email: 'luca@luca.com',
        password: '123317033',
        createdAt:'10/02/2025 10:00 AM',
        isLoggedIn: false
      }

      for (i=0; i<utenti.length;i++){
        if (utenti[i].email === newUtente.email || utenti[i].username === newUtente.username){
          console.log('Utente già esistente')
          return;
        }
      }

      utenti.push(newUtente)
      
    }

    SignUp();
    console.log(utenti)

    function signIn (emai, passwor){

      for (i=0; i<utenti.length;i++){
        if (utenti[i].email === emai && utenti[i].password === passwor){
          console.log(`Benritrovato ${utenti[i].username}`)
        }else{
          console.log('Email o Password sbagliati')
        }
          
      }
      }

  
    signIn('luca@luca.com','123317033');

      

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]


function rating(){
  
}