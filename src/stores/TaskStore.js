import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore",{
state: () =>({
  tasks:[
    {id: 1, nameWork: "Drink Coffee", isCompleted: false, isProgress: false},
    {id: 2, nameWork: "Watch TV", isCompleted: false, isProgress: false},
    {id: 3, nameWork: "Coding", isCompleted: true, isProgress: false},
    {id: 4, nameWork: "Eat Lunch", isCompleted: false, isProgress: false},
    {id: 5, nameWork: "Play soccer", isCompleted: false, isProgress: false},
    {id: 6, nameWork: "Go to cinema", isCompleted: false, isProgress: false},
  ]
}),
getters: {
  getTaskCompleted: (state) =>{
    return state.tasks.filter(task=>task.isCompleted===true);
  },
  getTaskNotCompleted: (state) =>{
    return state.tasks.filter(task=>task.isCompleted===false);
  }
},
actions: {
  deleteTask(id){
    this.tasks = this.tasks.filter(task=>{
      return task.id !== id;
    })
  },
  addTask(task){
    this.tasks.push(task);
  },
  deleteProgress(){
    this.tasks.forEach((task)=>{
      task.isProgress = false;
    })
  },
  getTaskHover(id){
    return this.tasks.filter(task =>task.id ===id)
  }
}
});