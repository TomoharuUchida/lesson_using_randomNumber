// 変数の定義
let mymoney = 30000;
let nthtime = 0;
// 確率調整用の数字
const probability = 5;

money_with_me.innerHTML = mymoney;

/*function random() {
    $(function () {
        setInterval(function () {
            const randomNumber1 = Math.random();
            const randomNumber_reel_1 = Math.floor(randomNumber1 * probability + 1);
            $("#reel_1").text(randomNumber_reel_1);

            const randomNumber2 = Math.random();
            const randomNumber_reel_4 = Math.floor(randomNumber2 * probability + 1);
            $("#reel_4").text(randomNumber_reel_4);

            const randomNumber3 = Math.random();
            const randomNumber_reel_7 = Math.floor(randomNumber3 * probability + 1);
            $("#reel_7").text(randomNumber_reel_7);
        }, 100);
    });
}:*/

// リールのリセット処理
function reset() {
    reel_1.innerHTML = 7;
    reel_2.innerHTML = 7;
    reel_3.innerHTML = 7;
    reel_4.innerHTML = 7;
    reel_5.innerHTML = 7;
    reel_6.innerHTML = 7;
    reel_7.innerHTML = 7;
    reel_8.innerHTML = 7;
    reel_9.innerHTML = 7;

    $('#reel_1').css('color', '#000000');
    $('#reel_1').css('background-color', '#f1eac3');
    $('#reel_2').css('color', '#000000');
    $('#reel_2').css('background-color', '#f1eac3');
    $('#reel_3').css('color', '#000000');
    $('#reel_3').css('background-color', '#f1eac3');
    $('#reel_4').css('color', '#000000');
    $('#reel_4').css('background-color', '#f1eac3');
    $('#reel_5').css('color', '#000000');
    $('#reel_5').css('background-color', '#f1eac3');
    $('#reel_6').css('color', '#000000');
    $('#reel_6').css('background-color', '#f1eac3');
    $('#reel_7').css('color', '#000000');
    $('#reel_7').css('background-color', '#f1eac3');
    $('#reel_8').css('color', '#000000');
    $('#reel_8').css('background-color', '#f1eac3');
    $('#reel_9').css('color', '#000000');
    $('#reel_9').css('background-color', '#f1eac3');

    /*const reel_colors = [reel_1,
        reel_2,
        reel_3,
        reel_4,
        reel_5,
        reel_6,
        reel_7,
        reel_8,
        reel_9];

    console.log(reel_colors[0]);

    for (let counter = 0; counter < reel_colors.length; counter++) {
        console.log(reel_colors[counter]);
        $('#reel_colors[counter]').css('color', '#0000000');
        $('#reel_colors[counter]').css('background-color', '#f1eac3');

    }*/
}

// タイマーボタンクリック時の処理
$("#time").on("click", function () {
    cnt = 30; //5秒前からカウントスタート
    $('#time').text(cnt);
    cnDown = setInterval(function () { //1秒おきにカウントマイナス
        cnt--;
        // if (cnt < 10) {
        // $('#time').css('color', '#ed1c24');

        if (cnt <= 0) {//0になったら停止する
            $('#time').css('background-color', '#F15922');
            $('#time').text('終了');
            $('#start_btn').css('pointer-events', 'none');
            $('#start_btn').css('background-color', '#000000');
            $('#stop_btn').css('pointer-events', 'none');
            $('#img').css('display', 'block');
            $('#rules').css('background', 'url(../img/slot.jpg)');
            clearInterval(cnDown);
        }
        $('#time').text(cnt);
    }, 1000);
});

// スタートボタンクリック時の処理
$("#start_btn").on("click", function () {
    mymoney = mymoney - 3000;
    money_with_me.innerHTML = mymoney;
    $('#stop_btn').css('background-color', '#f7e442');
    $('#stop_btn').css('pointer-events', 'auto');
    // $('#start_btn').css('background-color', '#000000');
    $('#start_btn').css('pointer-events', 'none');
    $("#prize_money").text('賞金は,');

    reset();
});


// ストップボタン押す,スロットの数字が決まる処理
function reel_stop() {
    if (nthtime === 0) {
        const randomNumber1 = Math.random();
        const randomNumber_reel_1 = Math.floor(randomNumber1 * probability + 1);
        $("#reel_1").text(randomNumber_reel_1);

        const randomNumber2 = Math.random();
        const randomNumber_reel_4 = Math.floor(randomNumber2 * probability + 1);
        $("#reel_4").text(randomNumber_reel_4);

        const randomNumber3 = Math.random();
        const randomNumber_reel_7 = Math.floor(randomNumber3 * probability + 1);
        $("#reel_7").text(randomNumber_reel_7);

        $('#reel_1').css('color', '#f1eac3');
        $('#reel_1').css('background-color', '#000000');
        $('#reel_4').css('color', '#f1eac3');
        $('#reel_4').css('background-color', '#000000');
        $('#reel_7').css('color', '#f1eac3');
        $('#reel_7').css('background-color', '#000000');

        nthtime++;
    } else if (nthtime === 1) {
        const randomNumber4 = Math.random();
        const randomNumber_reel_2 = Math.floor(randomNumber4 * probability + 1);
        $("#reel_2").text(randomNumber_reel_2);

        const randomNumber5 = Math.random();
        const randomNumber_reel_5 = Math.floor(randomNumber5 * probability + 1);
        $("#reel_5").text(randomNumber_reel_5);

        const randomNumber6 = Math.random();
        const randomNumber_reel_8 = Math.floor(randomNumber6 * probability + 1);
        $("#reel_8").text(randomNumber_reel_8);

        $('#reel_2').css('color', '#f1eac3');
        $('#reel_2').css('background-color', '#000000');
        $('#reel_5').css('color', '#f1eac3');
        $('#reel_5').css('background-color', '#000000');
        $('#reel_8').css('color', '#f1eac3');
        $('#reel_8').css('background-color', '#000000');
        nthtime++;

    } else if (nthtime === 2) {
        const randomNumber7 = Math.random();
        const randomNumber_reel_3 = Math.floor(randomNumber7 * probability + 1);
        $("#reel_3").text(randomNumber_reel_3);

        const randomNumber8 = Math.random();
        const randomNumber_reel_6 = Math.floor(randomNumber8 * probability + 1);
        $("#reel_6").text(randomNumber_reel_6);

        const randomNumber9 = Math.random();
        const randomNumber_reel_9 = Math.floor(randomNumber9 * probability + 1);
        $("#reel_9").text(randomNumber_reel_9);

        $('#reel_3').css('color', '#f1eac3');
        $('#reel_3').css('background-color', '#000000');
        $('#reel_6').css('color', '#f1eac3');
        $('#reel_6').css('background-color', '#000000');
        $('#reel_9').css('color', '#f1eac3');
        $('#reel_9').css('background-color', '#000000');
        nthtime--;
        nthtime--;

        // ボタンの無効化
        $('#stop_btn').css('background-color', 'black');
        $('#stop_btn').css('pointer-events', 'none');
        $('#start_btn').css('pointer-events', 'auto');

        // 当たりの判定
        // 結果の定義
        // const result_jointed_a = randomNumber_reel_1 + randomNumber_reel_2 + randomNumber_reel_3;
        const result_row1 = $("#reel_1").text();
        const result_row2 = $("#reel_2").text();
        const result_row3 = $("#reel_3").text();
        const result_row4 = $("#reel_4").text();
        const result_row5 = $("#reel_5").text();
        const result_row6 = $("#reel_6").text();
        const result_row7 = $("#reel_7").text();
        const result_row8 = $("#reel_8").text();
        const result_row9 = $("#reel_9").text();

        const result_jointed_a = result_row1 + result_row2 + result_row3;
        const result_jointed_b = result_row4 + result_row5 + result_row6;
        const result_jointed_c = result_row7 + result_row8 + result_row9;
        const result_jointed_d = result_row1 + result_row5 + result_row9;
        const result_jointed_e = result_row3 + result_row5 + result_row7;

        const results = [result_jointed_a,
            result_jointed_b,
            result_jointed_c,
            result_jointed_d,
            result_jointed_e
        ];

        for (let counter = 0; counter < results.length; counter++) {
            if (results[counter] === 777) {
                mymoney = mymoney + 1000000;
                money_with_me.innerHTML = mymoney;
                $("#prize_money").append('1,000,000円獲得ッ!!');

            } else if (results[counter] % 111 === 0) {
                mymoney = mymoney + 200000;
                money_with_me.innerHTML = mymoney;
                $("#prize_money").append('200,000円獲得ッ!!');
            } else {
                mymoney = mymoney + 0;
                money_with_me.innerHTML = mymoney;
                $("#prize_money").append("はずれッ!");

                // $("#prize_money").text('次こそは勝てる!!さぁもう一度!!');
            }
        }

    } else {

        console.log('miss');
    }

}
// ストップボタン関数の呼び出し
$("#stop_btn").on("click", function () {
    reel_stop();
});
