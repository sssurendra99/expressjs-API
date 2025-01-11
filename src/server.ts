import { app } from './api/index'


const PORT = 10000
app.listen(PORT, ()=> {
    console.log(`Server is listening on ${PORT}`)
})