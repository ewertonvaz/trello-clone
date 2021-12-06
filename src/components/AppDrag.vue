<template>
    <div
        draggable=""
        @dragstart.self="onDrag()"
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
        onDrag (e){
            const transferData = JSON.parse( e.dataTansfer.get('payload') )
            this.$meit('drop', transferData)
        }
    }
}
</script>