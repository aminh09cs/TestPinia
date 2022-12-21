<template>
  <div class="task-item-right">
    <span class="task-item-right-icon trash">
      <font-awesome-icon icon="fa-solid fa-trash" @click="deleteTask_(id)" @mouseover="hover = true"
        @mouseleave="hover = false" :class="{ trash: hover }" />
      <!-- @mouseover="hover = true"
      @mouseleave="hover = false"
      :class="{ active: hover }" -->
    </span>
    <span class="task-item-right-icon">
      <font-awesome-icon icon="fa-solid fa-check" v-show="isCompleted === false" @click="task.isCompleted = true"
        class="check" />
    </span>
  </div>
</template> 
<script setup>
import { useMyTaskStore_ } from '../stores/MyTaskStore_'
import { defineProps } from 'vue';
//props
const props = defineProps({
  isCompleted: Boolean,
  task: Object,
  id: Number,
})

const taskStore = useMyTaskStore_();

//methods
const deleteTask_ = (id) => {
  taskStore.actions.deleteTask(id);
  // console.log(id);
  // console.log("====");
  // console.log(taskStore.state.value.tasks[0].id);
}
//methods
</script>
<style scoped lang="scss">
.task-item-right {
  display: flex;
  gap: 10px;

  @media screen and (max-width: 640px) {
    font-size: 12px;
  }

  .check {
    cursor: pointer;
  }

  .trash {
    cursor: pointer;

    &:hover {
      animation: rotation 0.2s infinite alternate;
    }
  }

}

//keyframe
@keyframes rotation {
  from {
    transform: rotate(-20deg);
  }

  to {
    transform: rotate(20deg);
  }
}
</style>