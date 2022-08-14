const heads = ['title','content','dueDate','status'];
const deal = require('./dealWithJSON');

const checkUniqueTitle = (allTasks,argv)=>{
    for(let i=0;i<allTasks.length;i++){
        if(allTasks[i].title == argv.title){
            let err = new Error('Title already existed'); 
            return console.log(err);
        }
    }
}

const addTask = (argv)=>{
    const allTasks = deal.readFromJSON();
    checkUniqueTitle(allTasks,argv);

    const data = {};
    heads.forEach((head)=>{
        data[head] = argv[head];
    });
    allTasks.push(data);
    deal.writeToJSON(allTasks);
}

const showAllTasks = ()=>{
    const allTasks = deal.readFromJSON();
    return allTasks;
}

const showSingleTask = (title)=>{
    const allTasks = deal.readFromJSON();
    const singleTask = allTasks.find(task=>task.title == title);
    if(!singleTask) return 'No task with this title';
    return singleTask;
}

const editTask = (argv)=>{
    const allTasks = deal.readFromJSON();
    allTasks.forEach((task,i)=>{
        if(task.title == argv.title){
            if(argv.content) allTasks[i].content = argv.content;
            if(argv.dueDate) allTasks[i].dueDate = argv.dueDate;
        }
    });
    deal.writeToJSON(allTasks);
}

const changeTaskStatus = (title)=>{
    const allTasks = deal.readFromJSON();
    allTasks.forEach((task,i)=>{
        if(task.title == title){
            allTasks[i].status = !task.status;
        }
    });
    deal.writeToJSON(allTasks);
}

module.exports = {addTask,showAllTasks,showSingleTask,editTask,changeTaskStatus}