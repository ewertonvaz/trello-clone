<template>
    <div
        @drop.self="onDrop()"
        @dragover.prevent
        @dragenter.prevent
    >
        <slot />
    </div>
</template>
<script>
export default {
    props: {
        transferData: {
            type: Object,
            required: true
        }
    },
    methods: {
        onDrop (e){
            e.dataTansfer.set('payload', JSON.stringify(this.transferData))
        }
    }
}
</script>