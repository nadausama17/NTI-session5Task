const yargs = require('yargs');
const tasksController = require('./controllers/tasks.controller');

yargs.command({
    command: 'add',
    builder:{
        title:{
            type:'String',
            unique:true,
            optionDemand:true,
        },
        content:{
            type:'String',
            optionDemand:true,
        },
        dueDate:{
            type:'Date',
            optionDemand:true,
        },
        status:{
            type:'Boolean',
            default:false,
        }
    },
    handler:(argv)=> tasksController.addTask(argv)
});

yargs.command({
    command:'showAll',
    handler:()=> console.log(tasksController.showAllTasks())
});

yargs.command({
    command:'showSingle',
    builder:{
        title:{
            type:'String',
            optionDemand:true
        }
    },
    handler:(argv)=> console.log(tasksController.showSingleTask(argv.title))
});

yargs.command({
    command:'edit',
    builder:{
        title:{
            type:'String',
            optionDemand:true
        },
        content:{
            type:'String',
        },
        dueDate:{
            type:'Date',
        },
    },
    handler:(argv)=> tasksController.editTask(argv)
})

yargs.command({
    command:'changeStatus',
    builder:{
        title:{
            type:'String',
            optionDemand:true
        }
    },
    handler:(argv)=> tasksController.changeTaskStatus(argv.title)
})

yargs.argv;