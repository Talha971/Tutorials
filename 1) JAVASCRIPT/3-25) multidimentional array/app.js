var arr = [
  ["chaman", 20, "Male", "ACCA"],
  ["Taha", 21, "Male", "CA"],
  ["Talal", 31, "Male", "ICMA"],
  ["sana", 41, "FeMale", "BCOM"],
];

//document.write(arr[0][2]);

document.write("<table border='1px' cellspacing=0>");
for (k = 0; k < 4; k++) {
  document.write("<tr>");
  for (l = 0; l < 4; l++) {
    document.write("<td>" + arr[k][l] + "</td>");
  }
  document.write("</tr>");
}
document.write("</table>");
