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

///////////////////////////////////////////////////////////////////
// 2. when user selects next Q, hide current div and show next div

// error msg for required questions
function stepError() {
  //error message display
  console.log("error msg: please make a selection");
}

// Q1 required
function goQ2() {
  if (footShape != null) {
    // hide step 1, show step 2 q1-foot-shape, q2-shoe-size
    $(".q1-foot-shape").removeClass("flex-column-override");
    $(".q1-foot-shape").addClass("hide");
    $(".q2-shoe-size").removeClass("hide");
    $(".q2-shoe-size").addClass("flex-column-override");
  } else {
    stepError();
  }
}

$(".btn-step-2").click(goQ2);

// Q2 required
function goQ3() {
  if (footShape != null) {
    // hide step 1, show step 2 q1-foot-shape, q2-shoe-size
    $(".q2-foot-shape").removeClass("flex-column-override");
    $(".q2-foot-shape").addClass("hide");
    $(".q3-shoe-size").removeClass("hide");
    $(".q3-shoe-size").addClass("flex-column-override");
  } else {
    stepError();
  }
}

$(".btn-step-3").click(goQ3);

//////////////////////////////////
// 3. when done, send to database

const baseURL = "https://shoe-insights-backend.herokuapp.com/api/shoe";

function submitSearch() {
  console.log("ok");
  console.log(footShape);
  $.post(baseURL, {
    footShape
    //   gender,
    //   womensSize,
    //   womensWidth,
    //   category,
    //   subCategory,
    //   brand,
    //   price,
    //   color,
    //   bootShaft,
    //   heelHeight,
    //   heelStyle,
    //   toeStyle,
    //   occasion,
    //   materials,
    //   features,
    //   performance,
    //   theme
  }).done(console.log("added to db"));
}

$("#search").click(submitSearch);
