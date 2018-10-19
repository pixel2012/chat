import emoji from '@/chat_modules/emoji';

class Session {
    constructor() {
        this.userId = '';
        this.userName = '';
        this.userHeader = '';
        this.chatCategory = 0;//大类；0是聊天组，1是用户组
        this.chatIndex = 0;//当前聊天主体索引
        this.chatUsers = [
            // {
            //     fromUserId: 'e373ff47b6954f54b4458257ff9423ae',
            //     fromNickName: '至尊宝',
            //     fromAvatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=580080393,299327986&fm=27&gp=0.jpg',
            //     desc: '暂无描述信息',
            //     online: true,
            //     unread: false,
            // },
            // {
            //     userId: 'sdhfgojslkdjgslksdfg',
            //     name: '紫霞仙子',
            //     head: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1269396706,3856444001&fm=27&gp=0.jpg',
            //     desc: '我是紫霞仙子，谢谢大家！',
            //     online: false,
            //     chatContent: []
            // }
        ];//聊天主体用户组
        this.loadingVip = false;
        this.chatMore = false;//是否加载更多
        this.chatList = [];//聊天内容
        this.chatTimers = [];//聊天信息确认定时器
        this.chatGroup = [];//分组列表
        this.chatGroupIndex = -1;//当前分组选中索引值
        this.groupListIndex = -1;//当前分组具体列表索引值
        this.isEmoji = false;//是否显示emoji
        this.emoji = emoji;
        this.content = '';//聊天内容
        this.dialogFormVisible = false;
        this.form = {};
        this.formLabelWidth = '50px';
        this.rules = {
            name: [
                {required: true, message: '请输入会员名称', trigger: 'blur'},
                {min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur'}
            ],
            desc: [
                {required: true, message: '请填写会员描述信息', trigger: 'blur'}
            ]
        };
        this.isMenuList = false;//是否显示菜单
        this.x = 0;//菜单X坐标
        this.y = 0;//菜单Y坐标
        this.keyword = '';//搜索关键词
    }
}

export default new Session()
