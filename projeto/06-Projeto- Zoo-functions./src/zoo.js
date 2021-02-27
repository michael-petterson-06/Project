/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/

const { animals, employees, prices, hours } = require('./data');
const data = require('./data');

function animalsByIds(...ids) {
  //1 - seu código aqui
  const resposta = data.animals.filter((valor) => {
       const resposta2 = ids.find((valor2) => {
          return valor2 === valor.id 
        })
    return resposta2;
  })
 return resposta;
}

//console.log(animalsByIds('baa6e93a-f295-44e7-8f70-2bcdc6f6948d','e8481c1d-42ea-4610-8e11-1752cfc05a46'))

//-------------------------------------------------------------------------------------
function animalsOlderThan(animal, age) {
  //2- seu código aqui
   const resposta = data.animals.find((valor) => {
    return valor.name === animal;
    });
   const resposta2 =  resposta.residents.every((valor2) => {
      return valor2.age > age;
   });       
  return resposta2;
}
//console.log(animalsOlderThan('penguins', 10));
//-----------------------------------------------------------------------------------------
function employeeByName(employeeName) {
  //3 - seu código aqui
  const resposta = data.employees.filter((valor) => {
    return valor.firstName === employeeName || valor.lastName === employeeName;
  })
  return resposta;
}

//console.log(employeeByName('Nigel'));
//-----------------------------------------------------------------------------------------
function createEmployee(personalInfo, associatedWith) {
  // 4- seu código aqui
  return { ...personalInfo, ...associatedWith };
}

const personalInfo = {
  id: '7ed1c9bb-8570-44f6-b718-0666b869573a',
  firstName: 'John',
  lastName: 'Doe',
};

const associatedWith = {
  managers: [
    'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
    '9e7d4524-363c-416a-8759-8aa7e50c0992'
  ],
  responsibleFor: [
    '0938aa23-f153-4937-9f88-4858b24d6bce',
    '89be95b3-47e4-4c5b-b687-1fabf2afa274',
    'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5'
  ]
};

//console.log(createEmployee(personalInfo, associatedWith))
//---------------------------------------------------------------------------------
function isManager(id) {
  // 5 - seu código aqui
   const resposta = data.employees.some((valor2) => {
    return  valor2.managers.includes(id);
  });
  return resposta;
}

//console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'))
//-----------------------------------------------------------------------------------

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // 6 - Seu cógigo aqui
  const newEmployee = {id,firstName,lastName,managers,responsibleFor,};
  employees.push(newEmployee);
  return employees
}
/*console.log(addEmployee('4141da1c-a6ed-4cf7-90c4-99c657ba4ef3', 'Jane', 'Doe',
[
  '546fe3d4-2d81-4bb4-83a7-92d5b7048d17',
  'a67a36ee-3765-4c74-8e0f-13f881f6588a',
],
[
  'ee6139bf-b526-4653-9e1e-1ca128d0ad2e',
  '210fcd23-aa7b-4975-91b7-0230ebb27b99',
]));*/

//--------------------------------------------------------------------------------------

function animalCount(species) {
  // 7 - seu código aqui
  if (species){
    return data.animals.filter((valor) => valor.name === species)[0].residents.length;
  } 
  else {
     const resposta = {};
     animals.forEach((valor) => {
      resposta[valor.name] = valor.residents.length;
    });
    return resposta;
  }
}
//console.log(animalCount())
//------------------------------------------------------------------------------------

function entryCalculator(entrants) {
  // 8 - seu código aqui
  if(typeof(entrants) === 'undefined' || Object.keys(entrants).length === 0 ){return 0;} 

  const total =   (prices.Adult * entrants.Adult) + (prices.Child * entrants.Child) + prices.Senior * entrants.Senior
   return total
}
//const entrants = { 'Adult': 2, 'Child': 3, 'Senior': 1 };
//console.log(entryCalculator(entrants));

//------------------------------------------------------------------------------------
function animalMap(options = {}) {
// 9 - seu código aqui
  
  objeto = {}
  animals.forEach((valor) => {
   objeto[valor.location] = [valor.name]
  })
  return objeto
}

options = { sex: 'female' }

//console.log(animalMap());   INCOMPLETO

//------------------------------------------------------------------------------------
const pickDay = (day) => {
  if (day === 'Monday') {
    return 'CLOSED';
  }
  return `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`;
};


function schedule(dayName) {
  // 10 - seu código aqui
  const dayObject = {};
  if (dayName) {
    dayObject[dayName] = pickDay(dayName);
    return dayObject;
  }
  Object.keys(hours).forEach((day) => {
    dayObject[day] = pickDay(day);
  });
  return dayObject;
}


//  console.log(schedule('Tuesday'));  ANALISAR CÓDIGO.
//-----------------------------------------------------------------------------------
function oldestFromFirstSpecies(id) {
  // 11- seu código aqui
  const procurandoAnimal = employees.find(({ id: employeeId }) => id === employeeId).responsibleFor[0];
     
  const todosAnimais = animals.find(({ id: animalId }) => animalId === procurandoAnimal).residents;
  
  const animalMaisVelho = todosAnimais.sort(({ age: valorA }, { age: valorB }) => valorB - valorA)[0];
  
  return Object.values(animalMaisVelho);
}
//console.log(oldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));
//----------------------------------------------------------------------------------------

function increasePrices(percentage) {
  // 12 - seu código aqui
  const newPercentage = percentage/100;
  const newPriceAdult  = Math.round(prices.Adult * newPercentage) + prices.Adult;
  const newPriceSenior  = (prices.Senior * newPercentage) + prices.Senior;
  const newPriceChild  = (prices.Child * newPercentage) + prices.Child;
  prices.Adult = newPriceAdult.toFixed(2)
  prices.Senior = newPriceSenior.toFixed(2);
  prices.Child = newPriceChild.toFixed(2);
  return prices
}

//console.log(increasePrices(30));
//-----------------------------------------------------------------------
function employeeCoverage(idOrName) {
  // 13 - seu código aqui
  if (typeof(idOrName) === 'undefined') {
     return data.employees.find((valor) => valor.firstName ='Nigel')
  }
}

//console.log(employeeCoverage());            INCOMPLETO
//-----------------------------------------------------------------------------
module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalsByIds,
  employeeByName,
  employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
