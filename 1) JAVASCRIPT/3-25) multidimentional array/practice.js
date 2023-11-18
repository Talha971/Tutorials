var ary = [
  ["Jonny", 19, "Course", "Gender"],
  ["Mickey", 20, "BA", "Male"],
  ["Sunitha", 22, "B.sc", "Female"],
  ["Rakeha", 23, "B.com", "Female"],
  ["Mahesh", 18, "BCA", "Male"],
  ["Moiz", 24, "BCA", "Male"],
];

// document.write(ary[4][0]);
// document.write(ary.length);

document.write("<table border='1px' cellspacing=0>");
for (k = 0; k < 5; k++) {
  document.write("<tr>");
  for (l = 0; l < 5; l++) {
    document.write("<td>" + ary[k][l] + "</td>");
  }
  document.write("</tr>");
}
document.write("</table>");
