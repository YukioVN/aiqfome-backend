const express  = require('express');
const mongoose = require('mongoose');
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const cors = require('cors');
const router = require('./routes');

const app = express();
const Port = process.env.Port || 3030;

const Uri = 'mongodb+srv://dbUser:dbUser@clusteraiq.pe7ab.mongodb.net/myFirstDatabase';

const store = new MongoDBStore({
  uri: Uri,
  collection: "sessions",
});

const connectDB = async () => {
  await mongoose.connect(Uri, 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    });
  console.log('BD conectado');
  app.listen(Port, () => console.log(`Servidor na porta ${Port}`));
}

connectDB();

app.use(express.json());
app.use(cors());

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    store: store,
    cookie: {
      secure: false,
      expires: false
    },
  })
);

app.use(router);