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
export default {
  props: {
    task: {
      type: Object,
      required: true
    },
    taskIndex: {
      type: Number,
      required: true
    },
    columnIndex: {
      type: Number,
      required: true
    },
    column: {
      type: Object,
      required: true
    },
    board: {
      type: Object,
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
    },
    moveTaskOrColumn (e, toTasks, toColumnIndex, toTaskIndex) {
      const type = e.dataTransfer.getData('type')
      if (type === 'task') {
        this.moveTask(e, toTasks, toTaskIndex !== undefined ? toTaskIndex : toTasks.lenght)
      } else {
        this.moveColumn(e, toColumnIndex)
      }
    },
    moveTask (e, toTasks, toTaskIndex) {
      const fromColumnIndex = e.dataTransfer.getData('column-id')
      const fromTaskIndex = e.dataTransfer.getData('task-id')
      const fromTasks = this.board.columns[fromColumnIndex].tasks
      this.$store.commit('MOVE_TASK', {
        fromTasks,
        fromTaskIndex,
        toTasks,
        toTaskIndex
      })
    }
  }
}
</script>
<style lang="css">
    .task {
    @apply flex items-center flex-wrap shadow mb-2 py-2 px-2 rounded bg-white text-grey-darkest no-underline;
    }
</style>
