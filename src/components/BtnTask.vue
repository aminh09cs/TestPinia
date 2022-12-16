<template>
  <div class="task-item-right">
    <span class="task-item-right-icon trash">
      <font-awesome-icon icon="fa-solid fa-trash" @click="deleteTask(id)" @mouseover="hover = true"
        @mouseleave="hover = false" :class="{ trash: hover }" />
      <!-- @mouseover="hover = true"
      @mouseleave="hover = false"
      :class="{ active: hover }" -->
    </span>
    <span class="task-item-right-icon">
      <font-awesome-icon icon="fa-solid fa-check" v-show="isCompleted === false" @click="task.isCompleted = true" />
    </span>
  </div>
</template>
<script setup>
import { useTaskStore } from '../stores/TaskStore'
import { defineProps } from 'vue';
import { storeToRefs } from 'pinia';
//props
const props = defineProps({
  isCompleted: Boolean,
  task: Object,
  id: Number,
})

const taskStore = useTaskStore();

//methods
const deleteTask = (id) => {
  taskStore.deleteTask(id);
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

  .trash {
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