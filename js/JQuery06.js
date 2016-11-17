/**
 * Created by YMH on 2016-11-16.
 */

/*
function myFunc() {
    $("ul > li").each(function (idx, item) {
        // idx : index번호
        // item : 현재 선택된 문서객체를 지칭
        // 문서객체를 JQuery객체로 변환
        console.log($(item).text() + "입니다.");
    });
}
*/
function myFunc() {
    $("ul > li").addClass("inStyle");
}

function inStyle() {
    // 현재 선택된 li에 대해서 style을 적용해 주면 됨
    $(this).addClass("inStyle");
    $(this).removeClass("outStyle");
}

function outStyle() {
    $(this).addClass("outStyle");
    $(this).removeClass("inStyle");
}




