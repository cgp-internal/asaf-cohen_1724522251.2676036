const express = require('express');
const app = express();
const taskRouter = require('./routes/task');
const userRouter = require('./routes/user').userRouter;
const taskModel = require('./models/task');
const userModel = require('./models/user').userModel;
const authenticate = require('./services/auth').authenticate;

app.use(express.json());

app.use('/task', authenticate, taskRouter);
app.use('/user', authenticate, userRouter);

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});