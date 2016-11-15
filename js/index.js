/**
 * Created by YMH on 2016-11-15.
 */
var test1 = 100;
var test2 = true;
var test3 = "소리없는 아우성";
var test4 = null;
var test5;

console.log(typeof test1);
console.log(typeof test2);
console.log(typeof test3);
console.log(typeof test4);
console.log(typeof test5);

// 선언적 함수

function myFunc(temp1, temp2){
    return temp1 + temp2;
}
var result = myFunc(10, 20);

console.log(result);

// 익명함수 (람다함수)

var test = function(temp1, temp2){
    return temp1 + temp2;
};
console.log(test(50,50));

// JavaScript 객체
// 변수 : property
// 함수 : method

var obj = {
    myName : "홍길동",
    myAge : 30,
    "my Hobby" : "오버워치",
    myInfo : function() {

    }
};

console.log(obj.myName);
console.log(obj.myAge);
//위와 같은 방법
console.log(obj["myAge"]);
// JavaScript는 배열형태로 객체 사용 가능
console.log(obj["my Hobby"]);
obj.myInfo();