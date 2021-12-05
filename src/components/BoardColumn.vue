<template>
    <div
    class="column"
    draggable
    @drop="moveTaskOrColumn($event, column.tasks, columnIndex)"
    @dragover.prevent
    @dragenter.prevent
    @dragstart.self="pickupColumn($event, columnIndex)"
    >
        <div class="flex justify-center mb-2 font-bold uppercase">{{column.name}}</div>
        <div class="list-reset">
          <ColumnTask
            v-for="(task, $taskIndex) of column.tasks"
            :key="$taskIndex"
            :task="task"
            :taskIndex="$taskIndex"
            :columnIndex="columnIndex"
            :column="column"
            :board="board"
          />
          <input
            type="text"
            class="w-full block p-2 bg-transparent"
            placeholder="+ Enter a new task"
            @keyup.enter="createTask($event, column.tasks)"
          />
        </div>
    </div>
</template>
<script>
import ColumnTask from '@/components/ColumnTask'
import MovingTasksAndColumnsMixin from '@/mixins/MovingTasksAndColumnsMixin'

export default {
  components: { ColumnTask },
  mixins: [MovingTasksAndColumnsMixin],
  methods: {
    pickupColumn (e, columnFromId) {
      e.dataTransfer.effectAllowed = 'move'
      e.dataTransfer.dropEffect = 'move'
      e.dataTransfer.setData('column-id', columnFromId)
      e.dataTransfer.setData('type', 'column')
    },
    createTask (e, tasks) {
      this.$store.commit('CREATE_TASK', {
        tasks,
        name: e.target.value
      })
      e.target.value = ''
    }
  }
}
</script>
<style>

.column {
  @apply bg-grey-light p-2 mr-4 text-left shadow rounded;
  min-width: 350px;
}

</style>
