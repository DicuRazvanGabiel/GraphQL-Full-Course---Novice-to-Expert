const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema')

const app = express();

app.use('/graphgl', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log("noew listening on port: 4000");
});