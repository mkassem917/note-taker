var express = require ('express');
const htmlRoutes = require('./routes/htmlroutes')
const apiRoutes = require("./routes/apiroutes");

var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
//app.use('*', apiRoutes);

app.use('/notes', htmlRoutes);


app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });