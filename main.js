// alert("js is working");

//////////////////////////
//      find shoes
//////////////////////////

//////////////////////////
// 1. capture selections
//////////////////////////

// selection variables
let footShape = null;
let gender = "";
let womensSize = null;
let mensSize = null;
let womensWidth = "";
let mensWidth = "";
let category = "";
let subCategory = "";
let brand = "";
let price = "";
let color = "";
let bootShaft = "";
let heelHeight = "";
let heelStyle = "";
let toeStyle = "";
let occasion = "";
let materials = "";
let features = "";
let performance = "";
let theme = "";

// get foot type value
function getFootShape() {
  footShape = $(this).data("foot-shape-id");
  console.log(footShape);
}

$(".foot-button").click(getFootShape);

// show shoe size values, get shoe size gender
function getShoeGender() {
  $(".size-buttons").removeClass("hide");
  $(".width-buttons").addClass("hide");
  gender = $(this)
    .html()
    .toLowerCase();
  console.log(gender);
}

//get shoe size depending on gender
function getShoeSize() {
  if (gender === "women") {
    womensSize = $(this).html();
    console.log(womensSize);
  } else if (gender === "men") {
    mensSize = $(this).html();
    console.log(mensSize);
  }
}

//show shoe width values
function showWidth() {
  //hide shoe size
  $(".size-buttons").addClass("hide");
  //show shoe width
  $(".width-buttons").removeClass("hide");
}

//get shoe width values depending on gender
function getShoeWidth() {
  if (gender === "women") {
    womensWidth = $(this).data("shoe-width");
    console.log(womensWidth);
  } else if (gender === "men") {
    mensWidth = $(this).data("shoe-width");
    console.log(mensWidth);
  }
}

$(".shoe-gender").click(getShoeGender);
$(".shoe-size-button").click(getShoeSize);
$(".shoe-width").click(showWidth);
$(".shoe-width-button").click(getShoeWidth);

// get shoe category
function getShoeCategory() {
  if (category === "") {
    category = $(this).val();
    console.log(category);
  } else {
    category = `${category}, ${$(this).val()}`;
    console.log(category);
  }
}

$(".form-check-input").click(getShoeCategory);

// show shoe prices
function showPrice() {
  $(".price-list").removeClass("hide");
  $(".brand-list").addClass("hide");
}

// get shoe price
function getShoePrice() {
  if (price === "") {
    price = $(this).data("shoe-price");
    console.log(price);
  } else {
    price = `${price}, ${$(this).data("shoe-price")}`;
    console.log(price);
  }
}

$(".shoe-prices").click(showPrice);
$(".price-button").click(getShoePrice);

// show shoe brand
function showBrand() {
  $(".brand-list").removeClass("hide");
  $(".price-list").addClass("hide");
}

// get shoe brand
function getShoeBrand() {
  if (brand === "") {
    brand = $(this).html();
    console.log(brand);
  } else {
    brand = `${brand}, ${$(this).html()}`;
    console.log(brand);
  }
}
$(".shoe-brands").click(showBrand);
$(".brand-button").click(getShoeBrand);

///////////////////////////////////////////////////////////////////
// 2. user selects next/previous to go forward/back
///////////////////////////////////////////////////////////////////

// go back to previous question
function goBack() {
  let currentId = $(this).data("back-id");
  let previousId = currentId - 1;
  $(`.q-${currentId}-section`)
    .removeClass("block")
    .addClass("hide");
  $(`.q-${previousId}-section`)
    .removeClass("hide")
    .addClass("block");
}

$(".btn-back").click(goBack);

// error msg for required questions
function stepError(qId) {
  $(`.q${qId}-not-selected`)
    .removeClass("hide")
    .addClass("block");
}

// Q1 required, go to Q2
function goQ2() {
  if (footShape != null) {
    // hide step 1, show step 2
    $(".q1-foot-shape").addClass("hide");
    $(".q2-shoe-size").removeClass("hide");
  } else {
    let qId = $(this).data("q-id");
    stepError(qId);
  }
}

$(".btn-step-2").click(goQ2);

// Q2 required, go to Q3
//TODO: add men's size to data model and request body, account for multiple size selections

// go to q3
function goQ3() {
  if (womensSize != null) {
    // hide step 2, show step 3
    $(".q2-shoe-size").addClass("hide");
    $(".q3-shoe-category").removeClass("hide");
  } else {
    let qId = $(this).data("q-id");
    stepError(qId);
  }
}

$(".btn-step-3").click(goQ3);

// Q3 required, go to Q4
function goQ4() {
  if (category != "") {
    // hide step 3, show step 4
    $(".q3-shoe-category").addClass("hide");
    $(".q4-brand-price").removeClass("hide");
  } else {
    let qId = $(this).data("q-id");
    stepError(qId);
  }
}

$(".btn-step-4").click(goQ4);

//////////////////////////////////
// 3. when done, send to database
//////////////////////////////////

const baseURL = "https://shoe-insights-backend.herokuapp.com/api/shoe";

function submitSearch() {
  $.post(baseURL, {
    footShape,
    //-----------------
    gender,
    womensSize,
    // mensSize,
    womensWidth,
    // mensWidth
    //-----------------
    category,
    //   subCategory,
    //   color,
    //   bootShaft,
    //   heelHeight,
    //   heelStyle,
    //   toeStyle,
    //   occasion,
    //------------------
    brand,
    price
    //------------------
    //   materials,
    //   features,
    //   performance,
    //   theme
  }).done(console.log("added to db"));
}

$(".btn-done").click(submitSearch);
