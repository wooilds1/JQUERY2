/**
 * Created by YMH on 2016-11-15.
 */
function startClock(){
    // JavaScript 영역
    // 현재시간을 구하자! "2016-11-15 20:10:50" 처럼
    // html div 영역에 출력을 하는것이 목적 하지만 다이렉트로는 불가능
    // html div 영역을 JavaScript 객체로 들고온다.
    var div = document.getElementById("clockDiv");
    // HTML element를 JavaScript 객체로 변환시킨것 => document object(문서객체)

    // 1초마다 반복적으로 현재 시간을 구해서 div에 출력
    window.setInterval(function() {
        // 현재 시간을 구하자
        var today = (new Date()).toLocaleString();
        // div에 찍자
        div.innerHTML = today;
    },1000);
}