const { Router } = require('express');
const { v4: uuidv4 } = require('uuid');
const user_router = Router();

const users = [];

// const userExists = (array, id) => array.findIndex(item => item.id === id);

user_router.get('/user', (request, response) => {
  if (users.length === 0) {
    return response.json({ message: "Nenhum usuário cadastrado." });
  } else {
    return response.json(users);
  }
})

user_router.post('/user', (request, response) => {
  const { nome, username, password, cpf, email, ativo, status_adm } = request.body;
  const newUser = { id: uuidv4(), nome, username, password, cpf, email, ativo, status_adm };
  
  users.push(newUser);
  return response.json(users);
})

user_router.put('/user/:id', (request, response) => {
  const { id } = request.params;
  const { nome, username, password, cpf, email, ativo, status_adm } = request.body;

  const userExists = users.findIndex(user => user.id === id);

  if (userExists < 0) {
      return response.json({ message: "Usuário não encontrado." });
  } else {
      const newUser = { id, nome, username, password, cpf, email, ativo, status_adm }
      users[userExists] = newUser;
      return response.json(users[userExists]);
  }
})

user_router.delete('/user/:id', (request, response) => {
  const { id } = request.params;

  if (userExists(users, id) < 0) {
      return response.json({ message: "Usuário não encontrado." });
  } else {
      users.splice(userExists, 1);
      return response.sendStatus(204);
  }
})

module.exports = { user_router };
