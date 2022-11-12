const express = require('express')
const app = express()
app.all('/', (req, res) => {
    res.send({
        'status':'success'
    })
})
app.listen(process.env.PORT || 3000)