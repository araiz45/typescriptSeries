var myDate = new Date();
function LoginData(x) {
    if (x instanceof Date) {
        console.log(x.toTimeString);
    }
    else {
        console.log(x.lastIndexOf);
    }
}
function isFish(pet) {
    return pet.swim() !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "Fish food is bird";
    }
    else {
        pet;
        return "bird food is fish";
    }
}
function getTrueShap(shape) {
    if (shape.kind === "Circle") {
        return Math.PI * 2 * shape.radius * shape.radius;
    }
    else if (shape.kind === "square") {
        return shape.sides * 4;
    }
    else {
        return shape.width * shape.length;
    }
}
function getArea(shape) {
    switch (shape.kind) {
        case "Circle":
            console.log('hello');
        case "rectangular":
            console.log("Rectangular");
        case "square":
            return "hello";
        default:
            var _defaultforshape = shape;
            return _defaultforshape;
    }
}
