const app = require('./app')

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, (req, res) => {
    console.log("Server has started on port 3000");
})

