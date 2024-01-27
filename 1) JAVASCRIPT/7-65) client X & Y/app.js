// ye values hamesha view port ke hisaab se kaam karti hain matlab ke agar aap scroll down karoge tou X ya Y axis nhi bare ga

document.addEventListener("mousemove", (e) => {
  console.clear();
  console.log("mouse on X-axis: " + e.clientX);
  console.log("mouse on Y-axis: " + e.clientY);
});

// iss property ko aap kisi particular div main bhi set karsakte hou
