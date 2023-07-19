const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();
const session = require("express-session")
const sequelize = require('./config/connection');
const seed = require("./seeds/index")
// const SequelizeStore = require('connect-session-sequelize')(session.Store);


const apiRoutes = require("./routes")

// const sess = {
//   secret: 'porttownsend',
//   cookie: {maxAge: 12000000},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };

// app.use(session(sess))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


app.use((req, res, next) => {
  const allowedOrigins = ['http://localhost:3000', 'https://loranscruggs.netlify.app', 'http://loranscruggs.com', 'https://loranscruggs.com' ];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
       res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', true);
  return next();
});

app.options('*', (req,res) => { res.sendStatus(200) });

app.use("/api", apiRoutes)


sequelize.sync({force:false}).then(() => {
  seed()
  app.listen(PORT, () => {
      console.log('App listening on PORT ' + PORT);
  });
});