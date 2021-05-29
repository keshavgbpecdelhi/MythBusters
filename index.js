const app = require('express')();

const PORT = 8080;

app.listen(
    PORT,
    () => console.log(`Server running on ${PORT}`)
);

app.get('/demo', (req, res) => {
    res.send("Demo")
});