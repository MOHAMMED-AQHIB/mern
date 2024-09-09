const express = require('express');
const app = express();
app.use(express.json());
let users = [
    {
        "name": "mohammed",
        "city": "Chennai",
        "mobile": "7305201362",
        "email": "aqhib@gmail.com",
        "password": "1234"
    }
];

app.post('/register', (req, res) => {
    const { name, city, mobile, email, password } = req.body;

    const userExists = users.find(user => user.email === email);
 
    if (userExists) {
        return res.status(400).json({ message: 'Email is already registered' });
    }

    const newUser = { name, city, mobile, email, password };
    users.push(newUser);

    return res.status(201).json({ message: 'Registration successful', user: newUser });
});


app.listen(8080, () => {
    console.log('server started')
})