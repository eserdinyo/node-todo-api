const env = process.env.NODE_ENV || 'development'

if (env == 'development') {
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
}
else if (env == 'test') {
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest'
} else {
    process.env.MONGODB_URI = 'mongodb://todoapp:123qweasd@ds149682.mlab.com:49682/todo-app';
}