window.onload= function () {
    var vm = new Vue({
        el:'#indexTop',
        data:{
            topImgUrl:'images/topImg.png',
        }
    })
    let tradeDataList = {
        '煤矿':'safeList.html',
        '化工':'safeList.html',
        '建筑':'safeList.html',
        '机械':'safeList.html',
        '电力':'safeList.html',
        '冶金':'safeList.html',
        '消防':'safeList.html',
        '特种':'safeList.html',
        '煤矿':'safeList.html',
    }
    let knowledgeDataList={
        '安全新闻':'safeList.html',
        '安全法规':'safeList.html',
        '安全管理':'safeList.html',
        '安全技术':'safeList.html',
        '事故案例':'safeList.html',
        '操作规程':'safeList.html',
        '安全标准':'safeList.html',
        '安全标准':'safeList.html',
        '安全教育':'safeList.html',
        '安全文化':'safeList.html',
        '应急预案':'safeList.html',
        '安全评价':'safeList.html',
        '工伤保险':'safeList.html',
        '职业卫生':'safeList.html',
        '环保|健康':'safeList.html',
        '管理体系':'safeList.html',
        '文档|论文':'safeList.html',
        '工 程 师':'safeList.html',
        '安全文艺':'safeList.html',
        '培训课件':'safeList.html',
        '管理资料':'safeList.html',
        '安全常识':'safeList.html',
    }
    var navMenuList = new Vue({
        el:'#navMenuList',
        data:{
            knowledge:'知识',
            knowledgeDataList:knowledgeDataList,
            trade:'行业',
            tradeDataList:tradeDataList,
        }
    })
    let headlineNew = new Vue({
        el:'.headlineNew',
        data:{
            url:'javascript:;',
            newTitle:'习近平：积极推进我国应急管理体系和能力现代化'
        }
    })
    let indexBanner = new Vue({
        el:'.indexBanner',
        data:{
            indexBanner:[
                {
                    url:'images/banner.png',
                    info:'共中央政治局11月29日下午就我国应急管理体系...'
                },
                {
                    url:'images/banner2.png',
                    info:'新时代 新气象 新作为|聆听新时代的中国声音计提不充分的问题进行了认真梳理特别是对分'
                },
                {
                    url:'images/banner.png',
                    info:'共中央政治局11月29日下午就我国应急管理体系...'
                },
                {
                    url:'images/banner2.png',
                    info:'新时代 新气象 新作为|聆听新时代的中国声音计提不充分的问题进行了认真梳理特别是对分'
                },
            ]
        }
    })
    let indexSwiperBanner = new Swiper('.indexBanner .swiper-container',{
        pagination: {
            el: '.indexBanner .swiper-pagination',
            clickable :true,
        },
    })
    let indexSec01 = new Vue({
        el:'.indexSec01',
        data:{
            titleName:{
                titName01:'安全动态',
                titName02:'热点推荐'
            },
            safeHotNew:{
                imgUrl:'images/01.png',
                newTit:'四川宜宾发生一起交通事故 致3... ...',
                newIntro:'据四川省宜宾市公安局南溪区分局微信公众号发布通报，12月8日14时50分左右，南溪区宜南快速通道罗龙段发生一起交通事故。截至目前，事故造成3人死亡，另有4名伤者在医院接受救治，事故原因正在进一步调查中。截至目前事故造成3人死亡，另有4名伤者在医院接受救治，事故原因正在进一步调查中... ...    ',
                moreHref:'javascript:;'
            },
            hotRecommendsUrl:'javascript:;',
            hotRecommendsList:[
                {
                    url:'javascript:;',
                    title:'注册安全工程师考试交流',
                    time:'2017-05-26'
                },
                {
                    url:'javascript:;',
                    title:'安全生产法（2014版） ',
                    time:'2017-05-25'
                },
                {
                    url:'javascript:;',
                    title:'消防安全管理制度',
                    time:'2017-05-26'
                },{
                    url:'javascript:;',
                    title:'清明节放假公告',
                    time:'2017-03-26'
                },{
                    url:'javascript:;',
                    title:'注册安全工程师考试交流',
                    time:'2017-05-26'
                },
                {
                    url:'javascript:;',
                    title:'注册安全工程师考试交流',
                    time:'2017-05-26'
                },{
                    url:'javascript:;',
                    title:'注册安全工程师考试交流',
                    time:'2017-05-26'
                },{
                    url:'javascript:;',
                    title:'注册安全工程师考试交流',
                    time:'2017-05-26'
                },
            ]
        }
    })
    //indexSec02
    let indexSec02 = new Vue({
        el:'.indexSec02',
        data:{
            newList:[
                {
                    newUrl:'javascript:;',
                    newTit:'前11月重特大生产安全事故起数同比下降16.7%',
                    newTime:'12-05'
                },{
                    newUrl:'javascript:;',
                    newTit:'广西博白县一施工现场发生坍塌事故 致1死1伤',
                    newTime:'12-05'
                },{
                    newUrl:'javascript:;',
                    newTit:'湖南浏阳一烟花厂发生爆炸事故造成7死13伤',
                    newTime:'12-05'
                },{
                    newUrl:'javascript:;',
                    newTit:'用政府推广清洁煤 河北多位村民一氧化碳中毒身亡',
                    newTime:'12-04'
                },
            ],
            imgList:[
                {
                    imgUrl:'images/indexSec01.png',
                    newHref:'javascript:;'
                },{
                    imgUrl:'images/indexSec02.png',
                    newHref:'javascript:;'
                },{
                    imgUrl:'images/indexSec03.png',
                    newHref:'javascript:;'
                },{
                    imgUrl:'images/indexSec04.png',
                    newHref:'javascript:;'
                }
            ],
            rightInfo:{
                safeHref:'javascript:;',
                specialHref:'javascript:;',
                specialImgUrl:'images/tebieguanzhu.png',
                specialHref01:'javascript:;',
                specialHref02:'javascript:;',
                hotHref:'javascript:;',
            }
        }
    })
    // indexSec03
    let indexSec03 = new Vue({
        el:'.indexSec03',
        data:{
            MainTitName:[
                '特别关注',
                '培训课件',
                '应急预案',
                '安全论坛',
                '板块推荐'
            ],
            MainTitUrl:[
                'javascript:;',
                'javascript:;',
                'javascript:;',
                'javascript:;',
                'javascript:;',
            ],
            //特别关注Banner
            specialListBanner:[
                {
                    imgUrl:'images/tebieBanner.png',
                    imgHref:'javascript:;'
                },{
                    imgUrl:'images/tebieBanner.png',
                    imgHref:'javascript:;'
                }
            ],
            specialHeadList:[
                {
                    intro:'新雷预警—泰安同鑫创投',
                    href:'javascript:;'
                },
                {
                    intro:'金融论坛开讲啦',
                    href:'javascript:;'
                },
                {
                    intro:'程鹤麟：马英九登太平岛 两 啊啊啊啊',
                    href:'javascript:;'
                },
                {
                    intro:'什么扳倒贪腐大臣？',
                    href:'javascript:;'
                }
            ],
            indexSec03ListBox01:[
                {
                    title:'为什么中国的体制改革变得那么困难',
                    time:'01-29',
                    href:'javascript:;'
                },{
                    title:'08年四万亿式的发给发给大规模经济',
                    time:'01-22',
                    href:'javascript:;'
                },{
                    title:'似懂非懂国应增加定稿对外军',
                    time:'01-22',
                    href:'javascript:;'
                },{
                    title:'英九登的弗格森太平岛',
                    time:'01-22',
                    href:'javascript:;'
                },{
                    title:'什么扳倒贪腐大的发送到发送到臣？',
                    time:'01-22',
                    href:'javascript:;'
                },{
                    title:'为什么中国的体制改革变得那么困难',
                    time:'01-22',
                    href:'javascript:;'
                },{
                    title:'08年四万亿式的发给发给大规模经济',
                    time:'01-22',
                    href:'javascript:;'
                },{
                    title:'似懂非懂国应增加定稿对外军',
                    time:'01-22',
                    href:'javascript:;'
                },{
                    title:'英九登的弗格森太平岛',
                    time:'01-22',
                    href:'javascript:;'
                },{
                    title:'什么扳倒贪腐大的发送到发送到臣？',
                    time:'01-22',
                    href:'javascript:;'
                },
            ]
        }
    })
    let indexSec03Banner = new Swiper('.indexSec03 .bannerBox',{
        pagination: {
            el: '.indexSec03 .indexSec03HeadBoxSwiperPagination',
            clickable :true,
        },
    })
    //
}
