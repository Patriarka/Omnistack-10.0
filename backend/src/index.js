const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://patriarka:rzprxw80@cluster0-shard-00-00-a1svb.mongodb.net:27017,cluster0-shard-00-01-a1svb.mongodb.net:27017,cluster0-shard-00-02-a1svb.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3001);