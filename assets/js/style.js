$(function(){
        $("#open").show();
        $("#close").hide();
    // アイコンをクリック
	$("#open").click(function(){
		// ulメニューを開閉する
		$("#navi").slideToggle();
        $("#open").hide();
        $("#close").show();
	});

    // アイコンをクリック
	$("#close").click(function(){
		// ulメニューを開閉する
		$("#navi").slideToggle();
        $("#open").show();
        $("#close").hide();
	});

  AOS.init({
            disable: 'mobile'
  });
});

$(function () {
    var topBtn = $('#pagetop');
    var windowSize = window.innerWidth;
    var ua = window.navigator.userAgent.toLowerCase();
    // ブラウザがリサイズされたら、変数の値を更新する
    $(window).resize(function() {
        windowSize = window.innerWidth;
    });
    topBtn.hide();
    //スクロールが200と3000の間のみボタン表示
    $(window).scroll(function () {
      //console.log($(this).scrollTop());
      //console.log("windowSize"+windowSize);
      if(ua.indexOf("mac os x") !== -1){
        if(windowSize > 768){
          if ($(this).scrollTop() > 200 && $(this).scrollTop() < 3600) {
              topBtn.fadeIn();
          } else {
              topBtn.fadeOut();
          }
        }else if(windowSize > 600){
          if ($(this).scrollTop() > 200 && $(this).scrollTop() < 4500) {
              topBtn.fadeIn();
          } else {
              topBtn.fadeOut();
          }
        }else{
          if ($(this).scrollTop() > 200 && $(this).scrollTop() < 3700) {
              topBtn.fadeIn();
          } else {
              topBtn.fadeOut();
          }
        }
      }else{
        if(windowSize > 768){
          if ($(this).scrollTop() > 200 && $(this).scrollTop() < 3100) {
              topBtn.fadeIn();
          } else {
              topBtn.fadeOut();
          }
        }else if(windowSize > 600){
          if ($(this).scrollTop() > 200 && $(this).scrollTop() < 4100) {
              topBtn.fadeIn();
          } else {
              topBtn.fadeOut();
          }
        }else{
          if ($(this).scrollTop() > 200 && $(this).scrollTop() < 3494) {
              topBtn.fadeIn();
          } else {
              topBtn.fadeOut();
          }
        }
      }
    });
    //スクロールで問い合わせフォームに移動
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: $('#formarea').offset().top
        }, 500);
        return false;
    });
});
