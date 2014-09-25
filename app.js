
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./server/routes');
var user = require('./server/routes/user');
var apiRoutes = require('./server/api/TasksApi');
var http = require('http');
var path = require('path');

var app = express();


// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'server\\views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));





// development only
if ('development' == app.get('env')) {

  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

//Api
app.get('/api/tasks', apiRoutes.GetAllTasks);
app.post('/api/tasks', apiRoutes.AddNewTask);
app.put('/api/tasks', apiRoutes.EditTask);
app.delete('/api/tasks', apiRoutes.RemoveTask);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
