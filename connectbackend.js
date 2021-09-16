const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://book-backend-dd.herokuapp.com/',
  timeout: 2000,
});

getBook = async ()=> {
  try {
    const response = await instance.get('/api/book');
    console.log('ggg',response);
  } catch (error) {
    console.error(error);
  }
};

createBook = async (payload)=> {
  try {
    // console.log(payload);
    const response = await instance.post('/api/book',payload);
    console.log('ggg',response);
  } catch (error) {
    console.error(error);
  }
};


module.exports = {getBook ,createBook};


