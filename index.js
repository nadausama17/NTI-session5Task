const yargs = require('yargs');
const tasksController = require('./controllers/tasks.controller');

yargs.command({
    command: 'add',
    builder:{
        id:{
            default:Date.now()
        },
        title:{
            type:'String',
            demandOption:true,
        },
        content:{
            type:'String',
            demandOption:true,
        },
        dueDate:{
            type:'Date',
            demandOption:true,
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
        id:{
            demandOption:true
        }
    },
    handler:(argv)=> console.log(tasksController.showSingleTask(argv.id))
});

yargs.command({
    command:'edit',
    builder:{
        id:{
            demandOption:true
        },
        title:{
            type:'String',
            demandOption:true
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
        id:{
            demandOption:true
        }
    },
    handler:(argv)=> tasksController.changeTaskStatus(argv.id)
})

yargs.argv;