const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

app.use(express.json());
// app.use(bodyParser.json());
app.use(cors());


app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Importing the routes
const envelopesRoutes = require('./routes/envelopes');

// app.use(bodyParser.json());
app.use('/envelopes', envelopesRoutes);

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.get("/", (req,res) => res.send ("Welcome to Docu sign API and sending Documents By using document URL"));
