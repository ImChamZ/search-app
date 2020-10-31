// const express = require('express');
// const path = require('path'); // NEW
// const userData = require('./api/dummy/userData');

// const app = express();
// const port = process.env.PORT || 3002;
// const DIST_DIR = path.join(__dirname, 'build'); // NEW
// const HTML_FILE = path.join(DIST_DIR, 'index.html'); // NEW

// const userActions = require("./routes/todo");

// const mockResponse = {
//   foo: 'bar',
//   bar: 'foo'
// };
// app.use(express.static(DIST_DIR)); // NEW

// app.get('/api', (req, res) => {
//   res.send(userData);
// });

// app.use("/api/user", userActions);


// app.get('', (req, res) => {
//  res.sendFile(HTML_FILE); // EDIT
// });
// app.listen(port, function () {
//  console.log('App listening on port: ' + HTML_FILE);
// });

const express = require('express');
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3005;

const bodyParser = require("body-parser");
const userActions = require("./api/users");
const ticketActions = require("./api/tickets");
const organizationActions = require("./api/organizations");

//CORS middleware
app.use(cors());

//Body parser middleware
app.use(bodyParser.json());

const mockResponse = {
  foo: 'bar',
  bar: 'foo'
};

app.get('/api', (req, res) => {
  res.send(mockResponse);
});

app.use("/api/users", userActions);
app.use("/api/tickets", ticketActions);
app.use("/api/organizations", organizationActions);

app.get('/', (req, res) => {
 res.status(200).send('Hello World!');
});
app.listen(port, function () {
 console.log('App listening on port: ' + port);
});