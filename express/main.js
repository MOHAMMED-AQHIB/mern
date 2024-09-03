var express = require('express');
var app = express();
app.use(express.json());
app.get("/myname", (req, res) => {
    res.json({"msg" : "mass Jofin"});
});

app.post("/myname", (req, res) => {
    res.json({"msg" : "mass Aqhib"});
});

app.listen(8080, () => {
    console.log('server started')
})
app.post("/login",(request, response) =>{
    let email = request["query"]["email"];
    let pass = request["query"]["password"];

    if (email == "admin@gmail.com" && pass == "admin"){
        response.json({ message: "login successfull" });
    } else {
        response.json({ message: "credentials failed" });
    }

    // response.json({ email: email, password: pass });
});

app.post("/register", (request, response) => {
    let { name, email, password, address } = request.body;
    if (!name || !email || !password || !address){
        response.json({ message: "enter all the details"});
    }else {
        response.json({ message: "register successfully"});
    }
});
app.post("/add", (request, response) => {
  let { num1, num2 } = request.body;
  if (!num1 || !num2) {
    response.json({ message: "Enter 2 Values" });
  } else {
    response.json({ value: num1 + num2 });
  }
}); 