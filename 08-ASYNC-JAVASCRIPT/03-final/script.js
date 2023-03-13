//without event listerner

const wait = function (second) {
  return new Promise(function (resolve) {
    setTimeout(resolve, second * 1000);
  });
};

const h2Element = document.querySelector("h2");

// function createImage(imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement("img");
//     img.src = imgPath;
//     h2Element.after(img);

//     resolve(img);
//   });
// }

// with event handler

function createImage(imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", function () {
      h2Element.after(img);
      resolve(img);
    });

    img.addEventListener("load", function () {
      reject(new Error("Images not found!!"));
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
    return createImage("./img/pexels-phto-5615130.jpeg");
  })
  .then((img) => {
    console.log(`Image 2 Loaded Successfully!`);
  })
  .catch((err) => console.error(err));
