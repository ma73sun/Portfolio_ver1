$(function() {
    //モーダル
	var open = $('.modal-open');
	var close = $('.modal-close');
    　　var container = $('.modal-container');

//開くボタンをクリックしたらモーダルを表示する
    open.on('click',function(){
        var index = open.index(this);
        container.eq(index).fadeIn(400);
        $('body').css({
            overflow: 'hidden'
        });
        return false;
    });

//閉じるボタンをクリックしたらモーダルを閉じる
    close.on('click',function(){
        container.fadeOut(400);
        $('body').css({
            overflow: 'auto'
        });
    });

//モーダルの外側をクリックしたらモーダルを閉じる
    $(document).on('click',function(e) {
        if(!$(e.target).closest('.modal-body').length) {
            container.fadeOut(400);
            $('body').css({
                overflow: 'auto'
            });
        }
    });

    //ヘッダーナビ
    $('header nav li').click(
        function() {
        var index = $('header nav li').index(this);
        $('.works_navi li').removeClass('is-active');
        $(this).addClass('is-active');
        $('section').hide()
        $('section').eq(index).show();
        return false;
        }
    );

    //WORKSナビ
    $('.works_navi li').click(
        function() {
        var index = $('.works_navi li').index(this);
        $('.works_navi li').removeClass('is-active');
        $(this).addClass('is-active');
        $('#works_detail__wrapper > div').hide();
        $('#works_detail__wrapper > div').eq(index).show();
        return false;
        }
    );

    //SKILLSナビ
    $('.skills_navi li').click(
        function() {
        var index = $('.skills_navi li').index(this);
        $('.skills_navi li').removeClass('is-active');
        $(this).addClass('is-active');
        $('#skills_detail__wrapper > div').hide();
        $('#skills_detail__wrapper > div').eq(index).show();
        return false;
        }
    );
});