let typeSplit = new SplitType(".split-type, .work_title, .footer_email", {
  types: "words",
  tagName: "span"
});

$(".word").wrap("<div class='overflow-word'><div class='wording'></div></div>");
