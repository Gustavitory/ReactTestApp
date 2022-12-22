const app = require('./app/app');

const PORT = 3001

app.listen(PORT, () => {           
    console.log(`Server listening at ${PORT}`);
});