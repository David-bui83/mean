const pets = require('./../controllers/pets');
const path = require('path');
module.exports = app => {
  app.get('/pets',pets.getAll);
  app.get('/pets/:id',pets.getOne);
  app.post('/pets',pets.new);
  app.put('/pets/edit/:id',pets.updateOne);
  app.delete('/pets/:id',pets.destroy);
  // app.all('*',(req,res)=>{
  //   res.sendFile(path.resolve('./public/dist/public/index.html'));
  // });
}