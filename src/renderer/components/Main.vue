<template>
    <div class="chat-box">
        <!--<button @click="autoUpdate()">获取更新</button>-->
        <!--<ol id="content">-->
        <!--<li>生命周期过程展示</li>-->
        <!--</ol>-->
        <div class="chat-catalog">
            <div class="chat-catalog-item chat-catalog-header">
                <img src="~@/assets/header.jpg" alt="">
            </div>
            <div class="chat-catalog-item chat-icon-session"
                 :class="{active:catalogIndex==0}"
                 @click="switchCatalog(0,'session')"></div>
            <div class="chat-catalog-item chat-icon-group"
                 :class="{active:catalogIndex==1}"
                 @click="switchCatalog(1,'group')"></div>
        </div>
        <div class="chat-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    // import { ipcRenderer } from 'electron';
    const {ipcRenderer} = require('electron');
    export default {
        name: 'main-view',
        data() {
            return {
                catalogIndex: 0
            }
        },
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
            switchCatalog(caIndex,caPath){
                this.catalogIndex=caIndex;
                this.$router.push(caPath);
            }
            // autoUpdate() {
            //     ipcRenderer.send('update');
            // }
        }
    };
</script>

<style scoped>
    .chat-box {
        display: flex;
        width: 100%;
        min-width: 300px;
        height: 100%;
    }

    .chat-catalog {
        width: 60px;
        height: 100%;
        background-color: #272b30;
    }

    .chat-catalog-item {
        height: 60px;
        cursor: pointer;
        -webkit-app-region: no-drag;
    }

    .chat-catalog-header {
        position: relative;
        text-align: center;
    }

    .chat-catalog-header img {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 40px;
        height: 40px;
        overflow: hidden;
    }

    .chat-icon-session {
        background: url("../assets/session-icon.png") no-repeat center;
    }

    .chat-icon-session.active {
        background: url("../assets/session-icon-active.png") no-repeat center;
    }

    .chat-icon-group {
        background: url("../assets/group-icon.png") no-repeat center;
    }

    .chat-icon-group.active {
        background: url("../assets/group-icon-active.png") no-repeat center;
    }

    .chat-content {
        flex: 1;
        height: 100%;
        background-color: yellow;
        /*-webkit-app-region: no-drag;*/
    }
</style>