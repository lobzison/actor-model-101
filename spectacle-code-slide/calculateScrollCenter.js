"use strict";

function calculateScrollCenter(start, end, container) {
  if (!start) return;

  end = end || start;

  var top = start.offsetTop;
  var bottom = end.offsetTop + end.offsetHeight;

  var middle = Math.floor((top + bottom) / 2);
  var height = container.offsetHeight;
  var half = height / 2;

  return middle - half;
}

module.exports = calculateScrollCenter;