// alert("js is working");

//////////////////////////
// find shoes
//////////////////////////

// 1. capture selections
// selection variables
let footShape = null;
let gender = "";
let category = "";
let subCategory = "";
let womensSize = null;
let womensWidth = "";
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

// 2. send to database

const baseURL = "https://shoe-insights-backend.herokuapp.com/api/shoe";

function submitSearch() {
  console.log("ok");
  console.log(footShape);
  $.post(baseURL, {
    footShape
    //   gender,
    //   category,
    //   subCategory,
    //   womensSize,
    //   womensWidth,
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
