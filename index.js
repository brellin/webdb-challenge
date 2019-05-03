require('dotenv').config()
const server = require('./api')
const port = process.env.PORT || 4000

server.listen(port, () => {
    console.log(`\n=============================\n Server running on port ${port} \n=============================\n`)
})
