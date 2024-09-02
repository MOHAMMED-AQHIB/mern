var express = require('express');
var app = express();
app.get("/myname", (req, res) => {
    res.json({"msg" : "Jofin"});
});

app.listen(8080, () => {
    console.log('server started')
})