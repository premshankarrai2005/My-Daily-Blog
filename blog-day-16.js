// 📝 Day 16: Write a JavaScript function which return the smallest Number among the three number ?
function smallChecker(a,b,c){
    if (a<=b&&a<=c){
        console.log("The  smallest number is",a);
    }
    else if (b<=a&&b<=c){
        console.log("The  smallest number is",b);
    }
    else{
        console.log("The  smallest number is",c);
    }
}
smallChecker(4,5,-6);
smallChecker(249,249,249);