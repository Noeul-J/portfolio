import axios from 'axios'

const res = await axios.get('http://localhost:8000/api/test')
console.log(res.data) // { message: "Hello, World!" }