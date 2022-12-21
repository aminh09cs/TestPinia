<template>
  <div class="task-container-add">
    <input class="text" type="text" v-model="input" placeholder="Add New Task">
    <button class="btn-add" @click="addTask">
      <img src="../assets/Vector.png" alt="arrow-right">
    </button>
  </div>
</template>

<script setup>
// import { useMyTaskStore } from '../stores/MyTaskStore'
import { useMyTaskStore_ } from '../stores/MyTaskStore_';
import { ref } from 'vue';

//ref
const input = ref('');
//store
const taskStore = useMyTaskStore_();

//method
const addTask = () => {
  let id = taskStore.state.value.tasks.length + 1;
  if (input.value.length === 0) {
    alert('Noooooooooooooooooooooo');
    return;
  }
  else {
    taskStore.actions.addTask({
      id: id,
      nameWork: input.value,
      isCompleted: false,
      isProgress: false,
    })
    input.value = '';
  }
}
</script>
<style lang="scss" scoped>
.task-container-add {
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;

  .text {
    width: 85%;
    padding: 10px 30px;
    border: none;
    background-color: transparent;
    color: #94ADCF;

    @media screen and (max-width: 640px) {
      &::placeholder {
        font-size: 12px;
      }
    }
  }


  .btn-add {
    position: absolute;
    right: 0;
    top: 0;

    width: 15%;
    padding: 10px;
    color: white;
    border-radius: 10px;
    background: transparent;
    border: none;
    transition: color .5s;
    transition: background-color .5s;
    cursor: pointer;

    img {
      @media screen and (max-width: 640px) {
        height: 10px;
      }
    }
  }

}
</style>