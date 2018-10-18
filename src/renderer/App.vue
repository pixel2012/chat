<template>
    <div class="app">
        <router-view></router-view>
    </div>
</template>

<script>
    // import { ipcRenderer } from 'electron';
    const {ipcRenderer} = require('electron');
    export default {
        name: 'app',
        mounted() {
            // var _ol = document.getElementById("content");
            // ipcRenderer.on('message',(event,{message,data}) => {
            //     let _li = document.createElement("li");
            //     _li.innerHTML = message + " <br>data:" + JSON.stringify(data) +"<hr>";
            //     _ol.appendChild(_li);
            //     if (message === 'isUpdateNow') {
            //         if (confirm('是否现在更新？')) {
            //             ipcRenderer.send('updateNow');
            //         }
            //     }
            // });
        },
        methods: {
            autoUpdate() {
                ipcRenderer.send('update');
            }
        }
    };
</script>

<style>
    html, body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        border-radius: 6px;
        overflow: hidden;
        -webkit-app-region: drag;
    }

    /*自定义滚动条样式*/
    /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
    ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
        background-color: #f5f5f5;
    }

    /*定义滚动条轨道 内阴影+圆角*/
    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        background-color: #f5f5f5;
    }

    /*定义滑块 内阴影+圆角*/
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(178, 178, 178, .1);
        background-color: #aaa;
    }
</style>

<style scoped>
    .app {
        height: 100%;
    }
</style>