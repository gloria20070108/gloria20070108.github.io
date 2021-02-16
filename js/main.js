function prevPhoto() {
  console.log("show prev photo");
  let photo = document.getElementsByClassName("about-photo")[0];
  let curPhotoNameList = photo.src.split("/");
  let curPhotoName = curPhotoNameList[curPhotoNameList.length - 1];
  console.log(curPhotoName);

  if (curPhotoName === "about_1.JPG") {
    photo.src = "./img/about_3.JPG";
  } else if (curPhotoName === "about_2.JPG") {
    photo.src = "./img/about_1.JPG";
  } else {
    photo.src = "./img/about_2.JPG";
  }
}

function nextPhoto() {
  console.log("show next photo");
  let photo = document.getElementsByClassName("about-photo")[0];
  let curPhotoNameList = photo.src.split("/");
  let curPhotoName = curPhotoNameList[curPhotoNameList.length - 1];
  console.log(curPhotoName);

  if (curPhotoName === "about_1.JPG") {
    photo.src = "./img/about_2.JPG";
  } else if (curPhotoName === "about_2.JPG") {
    photo.src = "./img/about_3.JPG";
  } else {
    photo.src = "./img/about_1.JPG";
  }
}

