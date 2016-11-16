/**
 * Created by YMH on 2016-11-16.
 */
function myFunc(){
    console.log($("#apple").text());
    console.log($("#pineapple").text());
    console.log($("ul > li[class]").text());
    //console.log($("#uId").val());
    console.log($("form > input").attr("id"));
    console.log($("ol > li:first").text());
    //console.log($("ol > li:first + li").text());
    //console.log($("ol > li:eq(1)").text());
    console.log($("ol > li:nth-child(2)").text());
    console.log($("ol > li:last").text());
}
