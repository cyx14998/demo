function play68_init() {
    updateShare(0);
}
function play68_submitScore(score) {
    updateShareScore(score);
    Play68.shareFriend();
    //setTimeout( function() { Play68.shareFriend(); }, 1000 )
}
function updateShare(score, score1) {
    var descContent = "雪人跑酷";
    if (score > 0) 
        shareTitle = '我跑了' + score + '米，收集了' + score1 + '个水果，今日是我抢了那汪某人的头条！';
    else 
        shareTitle = "你今天跑上了新闻头条吗？";
    appid = '';
    Play68.setShareInfo(shareTitle, descContent);
    // document.title = shareTitle;
}
function updateShareScore(score, score1) {
    updateShare(score, score1);
}