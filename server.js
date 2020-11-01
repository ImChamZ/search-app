const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3005;

const bodyParser = require('body-parser');
const userActions = require('./api/users');
const ticketActions = require('./api/tickets');
const organizationActions = require('./api/organizations');

//CORS middleware
app.use(cors());

//Body parser middleware
app.use(bodyParser.json());

const mockResponse = {
  foo: 'bar',
  bar: 'foo',
};

app.get('/api', (req, res) => {
  res.send(mockResponse);
});

app.use('/api/users', userActions);
app.use('/api/tickets', ticketActions);
app.use('/api/organizations', organizationActions);

app.use('/', express.static('build'));
app.use('/login', express.static('build'));
app.use('/home', express.static('build'));

// app.get('/', (req, res) => {
//   res.status(200).send('Hello World!');
// });

app.listen(port, function () {
  console.log('App listening on port: ' + port);
});
