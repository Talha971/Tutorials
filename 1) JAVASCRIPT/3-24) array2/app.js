//direct value daaldi
//var arr= new Array(1,2,3,4,5);

//aik aik karke daali values
//var arr= new Array();
// arr[0]=10;
// arr[1]="Talha";
// arr[2]=true;
// arr[3]=20;
// arr[4]=30;

//user se le kar daali values
var arr = new Array(4);
for (var a = 0; a <= 4; a++) {
  arr[a] = prompt("enter the vlaue: ");
}
//ye sab main same rahega
document.write(arr + "<br>");
document.write(arr[2] + "<br>");
document.write("//////////////////////////////<br>");
document.write("<ul>");
for (var a = 0; a < 5; a++) {
  document.write("<li>" + arr[a] + "</li>");
}
document.write("</ul>");
