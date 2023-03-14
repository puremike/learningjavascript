//without event listerner

const wait = function (second) {
  return new Promise(function (resolve) {
    setTimeout(resolve, second * 1000);
  });
};

const h2Element = document.querySelector("h2");

function createImage(imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgPath;
    h2Element.after(img);

    img.addEventListener("load", function () {
      if (resolve(img)) {
        h2.after(img);
      } else reject(new Error("Images not found!!"));
    });
  });
}

createImage("./img/pexels-photo-544268.jpeg")
  .then((img) => {
    currentImg = img;
    console.log(`Image 1 loaded successfully!`);
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none";
    return createImage("./img/pexels-photo-5615130.jpeg");
  })
  .then((img) => {
    console.log(`Image 2 Loaded Successfully!`);
  })
  .catch((err) => console.error(err));
