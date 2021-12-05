<template>
    <div
        class="task"
        @click="goToTask(task)"
        draggable
        @dragstart="pickupTask($event, taskIndex, columnIndex)"
        @drop.stop ="moveTaskOrColumn($event, column.tasks, columnIndex, taskIndex)"
        @dragover.prevent
        @dragenter.prevent
    >
        <span class="w-full flex-no-shrink font-bold">
            {{ task.name }}
        </span>
        <p v-if="task.description" class="w-full flex-no-shrink mt-1 text-sm">{{task.description}}</p>
    </div>
</template>
<script>
import MovingTasksAndColumnsMixin from '@/mixins/MovingTasksAndColumnsMixin'
export default {
  mixins: [MovingTasksAndColumnsMixin],
  props: {
    task: {
      type: Object,
      required: true
    },
    taskIndex: {
      type: Number,
      required: true
    }
  },
  methods: {
    goToTask (task) {
      this.$router.push({ name: 'task', params: { id: task.id } })
    },
    pickupTask (e, taskId, columnId) {
      e.dataTransfer.effectAllowed = 'move'
      e.dataTransfer.dropEffect = 'move'

      e.dataTransfer.setData('task-id', taskId)
      e.dataTransfer.setData('column-id', columnId)
      e.dataTransfer.setData('type', 'task')
    }
  }
}
</script>
<style lang="css">
    .task {
    @apply flex items-center flex-wrap shadow mb-2 py-2 px-2 rounded bg-white text-grey-darkest no-underline;
    }
</style>
