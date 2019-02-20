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
let womensWidth = "";
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

// get shoe size gender and value
// TODO: add mens and width
function getShoeGender() {
  $(".size-buttons").removeClass("hide");
  $(".width-buttons").addClass("hide");
  gender = $(this)
    .html()
    .toLowerCase();
  console.log(gender);
}

function getShoeSize() {
  if (gender === "women") {
    womensSize = $(this).html();
  } else if (gender === "men") {
    mensSize = $(this).html();
  }
  console.log(womensSize);
}

function showWidth() {
  //hide shoe size
  $(".size-buttons").addClass("hide");
  //show shoe width
  $(".width-buttons").removeClass("hide");
}

function getShoeWidth() {
  if (gender === "women") {
    womensWidth = $(this).html();
  } else if (gender === "men") {
    mensWidth = $(this).html();
  }
  console.log(womensWidth);
}

$(".shoe-gender").click(getShoeGender);
$(".shoe-size-button").click(getShoeSize);
$(".shoe-width").click(showWidth);
$(".shoe-width-button").click(getShoeWidth);

// get shoe style
function getShoeStyle() {
  //code here
}

//click event here

///////////////////////////////////////////////////////////////////
// 2. when user selects next, hide current div and show next div
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

// Q1 required
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

// Q2 required
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

// Q3 required
function goQ4() {
  if (category != "") {
    // hide step 3, show step 4
    $(".q3-shoe-category").addClass("hide");
    $(".q4-more").removeClass("hide");
  } else {
    let qId = $(this).data("q-id");
    stepError(qId);
  }
}

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
    womensWidth
    // mensWidth
    //-----------------
    //   category,
    //   subCategory,
    //   color,
    //   bootShaft,
    //   heelHeight,
    //   heelStyle,
    //   toeStyle,
    //   occasion,
    //------------------
    //   brand,
    //   price,
    //------------------
    //   materials,
    //   features,
    //   performance,
    //   theme
  }).done(console.log("added to db"));
}

$(".btn-done").click(submitSearch);
