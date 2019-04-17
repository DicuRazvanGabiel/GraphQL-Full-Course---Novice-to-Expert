const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema')
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://admin:admin@cluster0-dt6oi.mongodb.net/test?retryWrites=true', {useNewUrlParser: true}).then(
    () => console.log('connected to db'),
    err => console.log(err)
);

app.use('/graphgl', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log("now listening on port: 4000");
});