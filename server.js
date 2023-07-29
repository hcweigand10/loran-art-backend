const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const sequelize = require('./config/connection');



const apiRoutes = require("./routes")


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
  app.listen(PORT, () => {
      console.log('App listening on PORT ' + PORT);
  });
});