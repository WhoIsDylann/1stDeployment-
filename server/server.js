const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 4000
const app = express()
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'd3087ef411f04608888796499ea6ee17',
  captureUncaught: true,
  captureUnhandledRejections: true,
})
rollbar.log('Hello world!')

app.use(express.json())
app.use(cors())
app.use(express.static('client'))
const {getHTML, getCSS, getJS, supplyPic} = require ('./controller')

app.get('/', getHTML)
app.get('/css', getCSS)
app.get('/js', getJS)
app.get('/monkes' , supplyPic)

app.listen(port, console.log(`Server running on ${port}`))