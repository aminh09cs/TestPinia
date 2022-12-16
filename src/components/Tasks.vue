<template>
  <div class="task-container">
    <AddTask />
    <TasksDetail />
  </div>
</template>
<script setup>
import AddTask from './AddTask.vue'
import TasksDetail from './TasksDetail.vue';
</script>
<style lang="scss">
.task-container {
  width: 70%;
  margin: 0 auto;
  padding: 50px;
  border-radius: 30px;
  background: #38404B;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  .title {
    font-size: 3rem;
    text-align: center;
    font-weight: 700;
  }
}
</style>