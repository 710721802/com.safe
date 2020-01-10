let vm = new Vue({
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
}
let knowledgeDataList={
    '安全新闻':'list_01_safeNews.html',
    '安全法规':'safeList.html',
    '安全管理':'safeList.html',
    '安全技术':'safeList.html',
    '事故案例':'safeList.html',
    '操作规程':'safeList.html',
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
let navMenuList = new Vue({
    el:'#navMenuList',
    data:{
        knowledge:'知识',
        knowledgeDataList:knowledgeDataList,
        trade:'行业',
        tradeDataList:tradeDataList,
    }
})