
var mongoose = require('mongoose');
(function()
{
    var Schema = mongoose.Schema;
    var TaskSchema = new Schema(
    {
        text: { type: String },
        isEdit: {type: Boolean},
        modified: { type: Date, default: Date.now }
    });
    mongoose.model('Task', TaskSchema);
})();

exports.GetAllTasks = function(req, res)
{
    var taskModel = mongoose.model('Task');
    return taskModel.find(function (err, tasks)
    {
        if (!err)
        {
            return res.send(tasks);
        }
        else
        {
            return console.log(err);
        }
    });
};

exports.AddNewTask = function(req, res)
{
    var taskModel = mongoose.model('Task');
    var task = new taskModel({ text: req.body.text });

    task.save(function (err)
    {
        if (!err)
        {
            console.log("created");
            return res.send(task);
        }
        else
        {
            console.log(err);
            return res.send(err);
        }
    });
};

exports.EditTask = function(req, res)
{
    var taskModel = mongoose.model('Task');
    return taskModel.findById(req.params.id, function (err, task)
    {
        task.text = req.body.text;
        return task.save(function (err)
        {
            if (!err)
            {
                console.log("updated");
                return res.send(task);
            }
            else
            {
                console.log(err);
                return res.send(err);
            }
        });
    });
};

exports.RemoveTask = function(req, res)
{
    var taskModel = mongoose.model('Task');
    return taskModel.findById(req.params.id, function (err, task)
    {
        return task.remove(function (err)
        {
            if (!err)
            {
                console.log("removed");
                return res.send('');
            }
            else
            {
                console.log(err);
                return res.send(err);
            }
        });
    });
};