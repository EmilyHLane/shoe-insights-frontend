// alert("js is working");

//////////////////////////
//      find shoes
//////////////////////////

//////////////////////////
// 1. capture selections

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
}
$(".foot-button").click(getFootShape);

// get shoe size gender and value
// TODO: add mens and width
function getShoeGender() {
  gender = $(this)
    .html()
    .toLowerCase();
  console.log(gender);
}

function getShoeSize() {
  womensSize = $(this).html();

  console.log(womensSize);
}

$(".shoe-gender").click(getShoeGender);
$(".shoe-size-button").click(getShoeSize);

// get shoe style
function getShoeStyle() {
  //code here
}

//click event here

///////////////////////////////////////////////////////////////////
// 2. when user selects next Q, hide current div and show next div

// error msg for required questions
function stepError(qId) {
  if (qId === 1) {
    $(".q1-not-selected")
      .removeClass("hide")
      .addClass("block");
  }
  if (qId === 2) {
    console.log("cool");
    $(".q2-not-selected")
      .removeClass("hide")
      .addClass("block");
  }
  if (qId === 3) {
    $(".q3-not-selected")
      .removeClass("hide")
      .addClass("block");
  }
}

// Q1 required
function goQ2() {
  if (footShape != null) {
    // hide step 1, show step
    $(".q1-foot-shape")
      .removeClass("flex-column-override")
      .addClass("hide");
    $(".q2-shoe-size")
      .removeClass("hide")
      .addClass("flex-column-override");
  } else {
    let qId = $(this).data("q-id");
    stepError(qId);
  }
}

$(".btn-step-2").click(goQ2);

// Q2 required
//TODO: add men's size to data model and request body, account for multiple size selections
function goQ3() {
  if (womensSize != null) {
    // hide step 2, show step 3
    $(".q2-shoe-size")
      .removeClass("flex-column-override")
      .addClass("hide");
    $(".q3-shoe-style")
      .removeClass("hide")
      .addClass("flex-column-override");
  } else {
    let qId = $(this).data("q-id");
    console.log(qId);
    stepError(qId);
  }
}

$(".btn-step-3").click(goQ3);

// Q3 one select required
function goQ4() {
  if (category != "") {
    // hide step 2, show step 3
    $(".q3-shoe-style")
      .removeClass("flex-column-override")
      .addClass("hide");
    $(".q4-more")
      .removeClass("hide")
      .addClass("flex-column-override");
  } else {
    let qId = $(this).data("q-id");
    console.log(qId);
    stepError(qId);
  }
}

//////////////////////////////////
// 3. when done, send to database

const baseURL = "https://shoe-insights-backend.herokuapp.com/api/shoe";

function submitSearch() {
  console.log("submitted");
  console.log(footShape, gender, womensSize);
  $.post(baseURL, {
    footShape,
    //-----------------
    gender,
    womensSize
    //   womensWidth,
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
