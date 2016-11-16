/**
 * Created by YMH on 2016-11-16.
 */

function myFunc() {
    // 현재 html 안에 있는 모든 element를 다 선택해서 글자색을 red로 변경 (전체선택자)
    //$(" * ").css("color", "red");

    // 태그선택자
    //$("h1, input").css("color","red");

    //$("#incheon").remove();

    //$(".myClass").css("background-color", "yellow");

    //$("[type=button]").css("color","red");

    // div의 자식으로 있는 ul의 자식으로 있는 li의 id라는 속성을 찾아 자식은 꺽쇠 >
    //$("div > ul > li[id]").css("color", "red");

    // 후손은 공백
    //$("div li[id=incheon]").css("color", "red");

    alert($("#incheon + li").text());
}