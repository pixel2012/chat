<template>
    <div class="group">
        <div class="group-list">分组</div>
        <div class="group-content"></div>
    </div>
</template>

<script>
    export default {
        name: "Group"
    }
</script>

<style scoped>
    .group{
        height: 100%;
        display: flex;
    }
    .group-list{
        width: 250px;
        background-color: #e8eef7;
        -webkit-app-region: no-drag;
    }
    .group-content{
        flex: 1;
        background-color: greenyellow;
    }
</style>