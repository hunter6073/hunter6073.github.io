var total = 11;
var fullScore = 10;
var tScore = 0;
var record = 0;
var quizRec = "";
var temp;
var quizIdx = 0; //当前索引
var lockTimer = 0;
var quizInfo = [
    {
        desc: "新郎新娘是在哪里认识的？",
        option: [
            ["华盛顿", "0A"],
            ["宾州", "0B"],
            ["洛杉矶", "0C"],
            ["纽约", "1D"],
        ],
        explain: "新郎新娘同是纽约大学的研究生，他们在校园相识",
    },
    {
        desc: "新郎新娘本科学位分别在哪个城市攻读的呢？",
        option: [
            ["新郎：咸阳；新娘：宾州", "1A"],
            ["新郎：咸阳；新娘：深圳", "0B"],
            ["新郎：沈阳；新娘：深圳", "0C"],
            ["新郎：纽约；新娘：宾州", "0D"],
        ],
        explain: "新郎本科是陕西省西北农林科技大学，新娘本科是宾夕法尼亚州立大学",
    },
    {
        desc: "新娘的妈妈姓什么？",
        option: [
            ["赵", "0A"],
            ["钱", "0B"],
            ["孙", "0C"],
            ["李", "1D"],
        ],
        explain: "嘿嘿，新娘的妈妈也姓李，没想到吧",
    },
    {
        desc: "以下哪种食物新郎无法享用？",
        option: [
            ["牛奶", "1A"],
            ["花生", "0B"],
            ["坚果", "0C"],
            ["巧克力", "0D"],
        ],
        explain: "新郎有乳糖不耐症，如果喝了太多牛奶就会非常迅速地“不体面”",
    },
    {
        desc: "新郎和新娘在一起有多少年了？",
        option: [
            ["1", "0A"],
            ["2", "0B"],
            ["3", "1C"],
            ["4", "0D"],
        ],
        explain: "新郎新娘的在一起纪念日是2019年2月09号",
    },
    {
        desc: "新郎爱好塑料模型，请问是哪个系列的模型呢？",
        option: [
            ["高达", "0A"],
            ["王者荣耀", "0B"],
            ["战锤", "1C"],
            ["战旗", "0D"],
        ],
        explain: "战锤永远滴神",
    },
    {
        desc: "新娘害怕以下哪种动物？",
        option: [
            ["猫", "0A"],
            ["狗", "1B"],
            ["兔子", "0C"],
            ["钝角", "0D"],
        ],
        explain: "新娘怕狗勾，大狗小狗狗宝宝都怕。选钝角的都反思一下你是怎么回事",
    },
    {
        desc: "新娘的祖籍是哪里？",
        option: [
            ["惠州", "0A"],
            ["青岛", "0B"],
            ["邢台", "1C"],
            ["杨凌", "0D"],
        ],
        explain: "新娘父母来自河北省邢台市",
    },
    {
        desc: "新郎不喜欢吃以下哪种甜品？",
        option: [
            ["蝴蝶酥", "1A"],
            ["DQ冰淇淋", "0B"],
            ["彩虹糖", "0C"],
            ["ladyM蛋糕", "0D"],
        ],
        explain: "新郎讨厌一切‘干干的’食物，比如蝴蝶酥",
    },
    {
        desc: "新娘最喜欢的甜品是？",
        option: [
            ["香菜圣代", "1A"],
            ["菠菜千层", "0B"],
            ["抹茶味麦片", "0C"],
            ["巧克力味甜甜圈", "0D"],
        ],
        explain: "新娘有些猎奇的口味，热爱一切香菜美食",
    },
];


function isQuizDone() {
    return quizIdx >= quizInfo.length;
}
function next() {
    $("div#bd > div.panel-body").hide();
    $("#quiz_list").find('li').find('input').each(function () {
        $(this).attr("checked", "");
    });
    gotoTop();
    resetTimer();
    quizIdx = quizIdx + 1;
    loadQuiz(quizIdx);
}

function resetTimer(){
    $("#btn_next").hide();
    $("#btn_next").hide();
    $("#btn_lock").show();
}

function revert(){
    quizIdx = quizIdx - 1;
    next();
}

function start() {
    quizIdx = 0;
    tScore = 0;
    quizInfo.forEach(quiz => {
        shuffle(quiz.option);
    });
    shuffle(quizInfo);
    loadQuiz(quizIdx);
}

function loadQuiz(id) {
    if (isQuizDone()) {
        result();
        return;
    }
    var q = quizInfo[id];
    var idx = 0;
    $("div#bd > div.panel-body").hide();
    $("#panel_quiz").show();
    $("#quiz_desc").text(quizInfo[id].desc);
    $("#quiz_list").find('li').each(function () {
        var option_desc = q.option[idx][0];
        var option_value = q.option[idx][1];
        var obj = '<input name="g" type="radio" class="" value="' + option_value + '"/>' + option_desc;
        $(this).html(obj);
        idx += 1;
    });
}

function result(t) {
    $("div#bd > div.panel-body").hide();
    $("#panel_result").show();
    gotoTop();
}

function explain(id, isAnsCorrect) {
    var explain_desc = "回答错误，请尝试其他选项";
    if(isAnsCorrect){
        explain_desc = quizInfo[id].explain;
        //TODO 更改锁定时间
        lockDown(function(){
            $("#btn_next").show();
            $("#btn_revert").hide();
        }, 3 * 1000);
    } else {
        lockDown(function() {
            $("#btn_next").hide();
            $("#btn_revert").show();
        }, 6 * 1000);
    }
    $("div#bd > div.panel-body").hide();
    $("#explain_head").text("问题#" + (id + 1));
    $("#explain_desc").text(explain_desc);
    setTimeout(function(){
        $("#panel_explain").show();
    }, 200);
    return 0;
}

//toggle callback
function toggle(t) {
    $(t).children("input").attr("checked", "checked");
    $("li.list-group-item").removeClass('active')
    var rt = $(t).children("input:checked").val();
    var score = rt.match(/\d+/)[0];
    console.log("tScore => " + tScore + ",score => " + score);
    if (score <= 0) {
        explain(quizIdx, false);
    } else {
        tScore = parseInt(tScore) + parseInt(score);
        explain(quizIdx, true);
    }
}

//time is the seconds of lock down duration
function lockDown(func, duration) {
    if (typeof duration != "number") {
        alert("网络繁忙，请稍后再试");
        return;
    } else {
        var sTime = Number(new Date());
        var eTime = sTime + duration;
        clearInterval(lockTimer);
        lockTimer = setInterval(() => {
            var curTime = Number(new Date());
            var left = ((eTime - curTime) / 1000);
            if(left >= 0.0001){
                $("#btn_next").hide();
                $("#btn_revert").hide();
                $("#btn_lock").text("请等待" + Math.floor(left) + "秒"); 
            } else {
                $("#btn_lock").hide();
                clearInterval(lockTimer);
                if(typeof func == "function"){
                    func();
                }
            }
        }, 100);
    }
}

function gotoTop() {
    $("body,html").animate({ scrollTop: ($("#header").offset().top + $("#header").height()) }, 1000);
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}