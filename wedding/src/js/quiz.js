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
        desc: "地球是圆的1？",
        option: [
            ["是", "1A"],
            ["否", "0B"],
            ["你说呢", "0C"],
            ["钝角", "0D"],
        ],
        explain: "你真的需要解释吗？",
    },
    {
        desc: "地球是圆的22？",
        option: [
            ["是", "1A"],
            ["否", "0B"],
            ["地球是什么？", "0C"],
            ["钝角", "0D"],
        ],
        explain: "你真的需要解释吗？",
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
    var explain_desc = "回答错误，少侠请重新来过";
    if(isAnsCorrect){
        explain_desc = quizInfo[id].explain;
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