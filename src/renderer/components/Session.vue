<template>
    <div class="session">
        <div class="session-list">
            <div class="session-wrap">
                <div class="session-item active">
                    <div class="session-item-header online">
                        <img src="~@/assets/header.jpg" alt="">
                        <span class="session-item-unread">12</span>
                    </div>
                    <div class="session-item-content">
                        <div class="session-item-title">切格瓦拉
                            <small>[河南省郑州市]</small>
                            <span class="session-item-time">11:12</span></div>
                        <div class="session-item-say">燥起来，跟我一起嗨！燥起来，跟我一起嗨！</div>
                    </div>
                </div>
                <div class="session-item">
                    <div class="session-item-header">
                        <img src="~@/assets/header.jpg" alt="">
                        <span class="session-item-unread">12</span>
                    </div>
                    <div class="session-item-content">
                        <div class="session-item-title">切格瓦拉
                            <small>[河南省郑州市]</small>
                            <span class="session-item-time">11:12</span></div>
                        <div class="session-item-say">燥起来，跟我一起嗨！</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="session-content">
            <div class="session-content-history">
                <div class="session-content-caption">切格瓦拉
                    <small>暂无描述</small>
                </div>
                <div class="session-content-show">
                    <div class="session-content-item other error">
                        <div class="session-content-item-header">
                            <img src="~@/assets/header.jpg" alt="">
                        </div>
                        <div class="session-content-item-text">
                            <div class="session-content-name">切格瓦拉</div>
                            <div class="session-content-say">
                                wqertqw rwqert qwrwqer tqwrwqert qwrwq ertqwrwqe rtqw rwqertqwrwq ertqwr
                                wqertqwrwqertqwrwqertqwrwqertqwrwqertqwrwqertqwr
                                <div class="session-content-error">!</div>
                            </div>
                        </div>
                    </div>
                    <div class="session-content-item me error">
                        <div class="session-content-item-text">
                            <div class="session-content-name">我</div>
                            <div class="session-content-say">
                                wqertqw rwqert qwrwqer tqwrwqert qwrwq ertqwrwqe rtqw rwqertqwrwq ertqwr
                                wqertqwrwqertqwrwqertqwrwqertqwrwqertqwrwqertqwr
                                <div class="session-content-error">!</div>
                            </div>
                        </div>
                        <div class="session-content-item-header online">
                            <img src="~@/assets/header.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="session-content-input">
                <div class="session-content-input-tools">
                    <div class="tools-item">
                        <img src="~@/assets/expression_icon.png" alt="">
                        <div class="emoji-list" v-if="isEmoji">
                            <template v-for="(item,index) in emoji">
                                <span :key="index" @click="selectEmoji(item)">{{item}}</span>
                            </template>
                        </div>
                    </div>
                    <div class="tools-item">
                        <img src="~@/assets/chat_img.png" alt="">
                    </div>
                    <div class="tools-item">
                        <img src="~@/assets/file_icon.png" alt="">
                    </div>
                </div>
                <div class="session-content-input-textarea">
                    <textarea ref="textContent">3452</textarea>
                </div>
                <div class="session-content-input-hand">
                    <button>立即发送</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import emoji from '@/chat_modules/emoji';
    import utils from '@/chat_modules/utils';
    export default {
        name: "session",
        data(){
            return {
                isEmoji:false,
                emoji:emoji

            }
        },
        created(){

        },
        mounted(){

        },
        methods:{
            selectEmoji(e) {
                // console.log(this.$refs['textContent']);
                utils.insertAfterText(this.$refs['textContent'], e);
                // this.content = this.$refs['textContent'].value;
                // this.content+=e;
            },//选择表情
        },
    }
</script>

<style scoped>
    .session {
        height: 100%;
        display: flex;
    }

    .session-list {
        width: 350px;
        height: 100%;
        overflow-y: auto;
        background-color: #e6e6e6;
    }

    .session-wrap {
        -webkit-app-region: no-drag;
    }

    .session-item {
        display: flex;
        padding: 10px;
        box-sizing: border-box;
        background-color: #dfdede;
        cursor: default;
    }

    .session-item:hover {
        background-color: #d7d4d3;
    }

    .session-item.active {
        background-color: #c2c0bf;
    }

    .session-item-header {
        position: relative;
        width: 40px;
        height: 40px;
    }

    .session-item-header img {
        width: 100%;
        height: 100%;
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
    }

    .session-item-header.online img{
        -webkit-filter: grayscale(0);
        filter: grayscale(0);
    }

    .session-item-unread {
        position: absolute;
        right: -8px;
        top: -8px;
        width: 16px;
        height: 16px;
        border-radius: 100%;
        background-color: red;
        text-align: center;
        font-size: 12px;
        line-height: 1rem;
        color: #fff;
    }

    .session-item-title {
        position: relative;
        font-size: 14px;
    }

    .session-item-title small {
        color: #666;
    }

    .session-item-time {
        position: absolute;
        right: 0;
        font-size: 12px;
        color: #a8a5a0;
    }

    .session-item-say {
        margin-top: 4px;
        font-size: 12px;
        color: #999;
        white-space: nowrap;
        overflow: hidden;
    }

    .session-item-content {
        flex: 1;
        max-width: calc(100% - 46px);
        padding-left: 10px;
        box-sizing: border-box;
    }

    .session-content {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }

    .session-content-history {
        flex: 1;
        display: flex;
        flex-direction: column;
        width: 100%;
        background-color: #f5f5f5;
    }

    .session-content-caption {
        width: 100%;
        height: 60px;
        padding: 15px;
        font-size: 24px;
        box-sizing: border-box;
        border-bottom: 1px solid #e7e7e7;
    }

    .session-content-caption small {
        font-size: 60%;
        color: #666;
    }

    .session-content-show {
        flex: 1;
        width: 100%;
        height: 100%;
        overflow-y: auto;
        -webkit-app-region: no-drag;
    }

    .session-content-item {
        width: 100%;
        box-sizing: border-box;
        padding: 10px 20px;
    }

    .session-content-item.other {
        text-align: left;
    }

    .session-content-item.me {
        text-align: right;
    }

    .session-content-item-header {
        display: inline-block;
        width: 40px;
        height: 40px;
        vertical-align: top;
    }

    .session-content-item-header > img {
        width: 100%;
        height: 100%;
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
    }

    .session-content-item-header.online > img {
        -webkit-filter: grayscale(0);
        filter: grayscale(0);
    }

    .session-content-item-text {
        display: inline-block;
        max-width: calc(100% - 100px);
        vertical-align: top;
        white-space: normal;
        word-break: break-all;
        text-align: left;
    }

    .session-content-name {
        font-size: 12px;
        color: #b2b2b2;
        margin-bottom: 4px;
    }

    .other .session-content-name {
        text-align: left;
    }

    .me .session-content-name {
        text-align: right;
    }

    .session-content-say {
        position: relative;
        padding: 4px 10px;
        font-size: 14px;
        border-radius: 6px;
        line-height: 1.5rem;
        background-color: #fff;
    }

    .other .session-content-item-text {
        margin-left: 10px;
    }

    .me .session-content-item-text {
        margin-right: 10px;
    }

    .other .session-content-say::before {
        content: "";
        display: inline-block;
        width: 0;
        height: 0;
        border-width: 0.625rem;
        border-style: solid;
        border-color: transparent #fff transparent transparent;
        position: absolute;
        top: 0.6rem;
        left: -1rem;
    }

    .me .session-content-say::before {
        content: "";
        display: inline-block;
        width: 0;
        height: 0;
        border-width: 0.625rem;
        border-style: solid;
        border-color: transparent transparent transparent #fff;
        position: absolute;
        top: 0.6rem;
        right: -1.1rem;
    }

    .session-content-error{
        display: none;
        position: absolute;
        top: 50%;
        width: 16px;
        height: 16px;
        color: #fff;
        text-align: center;
        line-height: 16px;
        border-radius: 100%;
        background-color: red;
    }

    .other .session-content-error{
        right: -25px;
        transform: translateY(-50%);
    }

    .me .session-content-error{
        left: -25px;
        transform: translateY(-50%);
    }

    .error .session-content-error{
        display: block;
    }

    /*
    <div class="session-content-input-tools"></div>
                <div class="session-content-input-textarea"></div>
                <div class="session-content-input-hand"></div>
    */
    .session-content-input {
        width: 100%;
        height: 140px;
        padding: 10px 20px;
        box-sizing: border-box;
        background-color: #fff;
        border-top: 1px solid #e7e7e7;
        -webkit-app-region: no-drag;
    }

    .session-content-input-tools {
        height: 30px;
    }

    .tools-item {
        position: relative;
        display: inline-block;
        width: 20px;
        height: 20px;
        cursor: pointer;
        margin-right: 10px;
    }

    .tools-item > img {
        width: 100%;
        height: 100%;
    }

    .session-content-input-textarea {
        width: 100%;
        height: 60px;
        box-sizing: border-box;
    }
    .session-content-input-textarea>textarea{
        display: inline-block;
        width: 100%;
        height: 100%;
        border:none;
        outline: none;
        resize: none;
        font-size: 14px;
        line-height: 1.3rem;
        box-sizing: border-box;
    }

    .session-content-input-hand {
        width: 100%;
        height: 36px;
        padding-top: 4px;
        box-sizing: border-box;
        text-align: right;
    }
    .session-content-input-hand>button{
        display: inline-block;
        border:none;
        outline: none;
        cursor: pointer;
        padding:6px;
        color: #333;
        background-color: #e8eef7;

    }
    .session-content-input-hand>button:hover{
        color: #fff;
        background-color: #129611;
    }
    .emoji-list {
        position: absolute;
        width: 300px;
        height: 200px;
        top: -214px;
        left: -14px;
        z-index: 10;
        border: 1px solid #ccc;
        background-color: #fff;
        box-sizing: border-box;
        padding-left: 4px;
        -moz-box-shadow: 1px 2px 7px #666;
        -webkit-box-shadow: 1px 2px 7px #666;
        box-shadow: 1px 2px 7px #666;
    }

    .emoji-list span {
        display: inline-block;
        width: 16px;
        padding: 4px;
        margin-right: 4px;
        cursor: pointer;
    }
</style>