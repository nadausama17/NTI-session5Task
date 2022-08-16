const heads = ['id','title','content','dueDate','status'];
const deal = require('./dealWithJSON');

const checkUniqueTitle = (allTasks,argv)=>{
    try{
    for(let i=0;i<allTasks.length;i++){
        if(allTasks[i].title == argv.title){
            throw new Error('Title already existed');
        }
    }}catch(e){
        return e.message;
    }
}

const addTask = (argv)=>{
    const allTasks = deal.readFromJSON();
    if(checkUniqueTitle(allTasks,argv)) return console.log(checkUniqueTitle(allTasks,argv));

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

const showSingleTask = (id)=>{
    const allTasks = deal.readFromJSON();
    const singleTask = allTasks.find(task=>task.id == id);
    if(!singleTask) return 'No task with this title';
    return singleTask;
}

const editTask = (argv)=>{
    const allTasks = deal.readFromJSON();
    allTasks.forEach((task,i)=>{
        if(task.id == argv.id){
            if(argv.title){
                if(checkUniqueTitle(allTasks,argv) && task.title!=argv.title) return console.log(checkUniqueTitle(allTasks,argv));
                allTasks[i].title = argv.title;
            }
            if(argv.content) allTasks[i].content = argv.content;
            if(argv.dueDate) allTasks[i].dueDate = argv.dueDate;
        }
    });
    deal.writeToJSON(allTasks);
}

const changeTaskStatus = (id)=>{
    const allTasks = deal.readFromJSON();
    allTasks.forEach((task,i)=>{
        if(task.id == id){
            allTasks[i].status = !task.status;
        }
    });
    deal.writeToJSON(allTasks);
}

module.exports = {addTask,showAllTasks,showSingleTask,editTask,changeTaskStatus}