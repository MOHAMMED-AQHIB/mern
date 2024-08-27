let personlist = [{
    "name":"Ashok",
    "address":"chennai",
    "mobile":"123456",
    "email":"ashokgtncollege@gmail.com"
},
{
    "name":"jofin",
    "address":"manali",
    "mobile":"67890",
    "email":"jofinjeen@gmail.com"
},
{
    "name":"Kumar",
    "address":"annanagar",
    "mobile":"45678",
    "email":"Kumardg@gmail.com"
}
];

console.log(personlist[2])

for(let index in personlist){
    console.log(personlist[index]['mobile']);
}
