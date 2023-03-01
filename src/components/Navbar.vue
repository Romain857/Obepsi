<template>
    <div>
        <Button icon="pi pi-arrow-right" @click="visibleLeft = true" class="mr-2" />

        <Sidebar v-model:visible="visibleLeft" :baseZIndex="10000">
            <h3>Left Sidebar</h3>
        </Sidebar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            visibleLeft: false,
        }
    }
}
</script>