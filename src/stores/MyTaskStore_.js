import { ref, computed } from "vue";

function createStore({ baseState, getters, actions }) {
  const _state = ref(baseState);
  const _getters = {};
  const _actions = {};
  for (const key in getters) {
    if (Object.hasOwnProperty.call(getters, key)) {
      const fn = getters[key].bind(_state.value);
      _getters[key] = computed(fn);
    }
  }

  for (const key in actions) {
    if (Object.hasOwnProperty.call(actions, key)) {
      _actions[key] = actions[key].bind(_state.value);
    }
  }
  return () => ({
    state: _state,
    getters: _getters,
    actions: _actions,
  });
}

const useMyTaskStore_ = createStore({
  baseState: {
    tasks:[
      {id: 1, nameWork: "Drink Coffee", isCompleted: false, isProgress: false},
      {id: 2, nameWork: "Watch TV", isCompleted: false, isProgress: false},
      {id: 3, nameWork: "Cod", isCompleted: true, isProgress: false},
      {id: 4, nameWork: "Eat Lunchn 2", isCompleted: false, isProgress: false},
      {id: 5, nameWork: "Play soccer", isCompleted: false, isProgress: false},
      {id: 6, nameWork: "Go to cinema", isCompleted: false, isProgress: false},
    ]
  },
  getters: {
    getTasks() {
      return this.tasks;
    },
    getTaskCompleted(){
      return this.tasks.filter(task=>task.isCompleted===true);
    },
    getTaskNotCompleted(){
      return this.tasks.filter(task=>task.isCompleted===false);
    },
  },
  actions: {
    toggleDarkmode() {
      this.darkmode = !this.darkmode;
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
      return this.tasks.filter(task =>task.id === id);
    },
    deleteTask(id){
      this.tasks =  this.tasks.filter((task)=>{
        return +task.id !== +id
      });
    }
  },
});
export { useMyTaskStore_ };