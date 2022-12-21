<template>
  <section class="task-container-detail">
    <h1 class="task-title">PENDING</h1>
    <button @click="deleteProgress" class="clear">Clear All</button>
    <div class="task-left">
      <div v-for="(task, i) in getTaskNotCompleted" class="task-item" :key="task.id">
        <div class="task-item-left">
          <span @click="task.isProgress = !task.isProgress">
            <font-awesome-icon icon="fa-solid fa-pen" class="pen" v-if="task.isProgress" />
          </span>
          <div>{{ task.nameWork }}</div>
        </div>
        <BtnTask :isCompleted="task.isCompleted" :task="task" :id="task.id" />
      </div>
      <div class="working" v-if="getTaskNotCompleted.length === 0">All has completed</div>
    </div>
    <h1 class="task-title">COMPLETED</h1>
    <div class="task-left">
      <div v-for="(task, i) in getTaskCompleted" class="task-item" :key="task.id">
        <div class=" task-item-left">
          <span :class="task.isCompleted ? 'done' : ''">
            <font-awesome-icon icon="fa-solid fa-pen" class="pen" v-if="task.isProgress" />
          </span>
          <div :class="task.isCompleted ? 'doneTask' : ''">{{ task.nameWork }}</div>
        </div>
        <BtnTask :isCompleted="task.isCompleted" :task="task" :id="task.id" />
      </div>
      <div class="working" v-if="getTaskCompleted.length === 0">Nothing is completed</div>
    </div>
  </section>
</template>
<script setup>
import { useMyTaskStore_ } from '../stores/MyTaskStore_'
import BtnTask from './BtnTask.vue'
const taskStore = useMyTaskStore_();
const getTaskCompleted = taskStore.getters.getTaskCompleted;
const getTaskNotCompleted = taskStore.getters.getTaskNotCompleted;


//method
const deleteProgress = () => {
  taskStore.deleteProgress();
}
</script>
<style scoped lang="scss">
.clear {
  padding: 8px;
  color: #94ADCF;
  background-color: #9400D3;
  border: none;
  border-radius: 10px;
  transition: all .5s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
}

.working {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  background-color: rgb(88, 88, 88, 0.2);
  height: 100px;
  color: #94ADCF;

  font-size: 30px;
  border-radius: 20px;
}


.task-container-detail {
  margin-top: 30px;

  .task-title {
    text-align: center;
    color: #94ADCF;
    font-size: 1.5rem;
    font-weight: 700;
    padding: 30px 0;


  }

  .task-left {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;



    .task-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;

      margin: 5px 0;
      padding: 10px;
      width: 45%;

      @media screen and (max-width: 1024px) {
        width: 100%
      }

      border-radius: 30px;
      background: #38404B;
      box-shadow: -5px 5px 10px rgba(48, 54, 64, 0.2),
      5px -5px 10px rgba(48, 54, 64, 0.2),
      -5px -5px 10px rgba(64, 74, 86, 0.9),
      5px 5px 13px rgba(48, 54, 64, 0.9),
      inset 1px 1px 2px rgba(64, 74, 86, 0.3),
      inset -1px -1px 2px rgba(48, 54, 64, 0.5);
      border-radius: 16px;

      font-family: 'Ubuntu';
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
      color: #94ADCF;

      .task-item-left {
        display: flex;
        align-items: center;
        gap: 10px;


        div {
          @media screen and (max-width: 640px) {
            font-size: 12px;
          }
        }

        div.doneTask {
          text-decoration: line-through;
        }

        span {

          border-radius: 50%;
          width: 18px;
          height: 18px;
          border: 2.5px solid #94ADCF;

          margin-right: 10px;

          cursor: pointer;
          position: relative;

          .pen {
            position: absolute;
            top: 2px;
            left: 2px;
            width: 10px;
            height: 10px;
            line-height: 18px;
            color: black
          }
        }

        span.done {
          background-color: #94ADCF;
        }
      }
    }
  }

}
</style>