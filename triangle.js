var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 5
};

function triangleArea(aTriangle) {
	var sP = (aTriangle.sideA + aTriangle.sideB + aTriangle.sideC) / 2; // semiperimeter
  return Math.sqrt(sP * ((sP - aTriangle.sideA) * (sP - aTriangle.sideB) * (sP - aTriangle.sideC)));
}