// Throttling Function
const throttleFunction = (func, delay) => {
  // Previously called time of the function
  let prev = 0;
  return (...args) => {
    // Current called time of the function
    let now = new Date().getTime();

    // Logging the difference between previously
    // called and current called timings
    console.log(now - prev, delay);

    // If difference is greater than delay call
    // the function again.
    if (now - prev > delay) {
      prev = now;

      // "..." is the spread operator here
      // returning the function with the
      // array of arguments
      return func(...args);
    }
  };
};
document.querySelector("#center").addEventListener(
  "mousemove",
  throttleFunction((dets) => {
    var div = document.createElement("h1");
    div.classList.add("imagediv");
    div.style.left = dets.clientX + "px";
    div.style.top = dets.clientY + "px";

    var img = document.createElement("img");
    img.setAttribute(
      "src",
      "https://images.unsplash.com/photo-1699354511301-ec6be76db29f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D"
    );
    div.appendChild(img);
    document.body.appendChild(div);

    gsap.to(img, {
      y: "0",
      ease: Power1,
      duration: 0.6,
    });

    gsap.to(img, {
      y: "100%",
      ease: Power2,
      delay: 0.6,
    });

    setTimeout(function () {
      div.remove();
    }, 2000);
  }, 500)
);
