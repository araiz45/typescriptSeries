let myDate = new Date();
function LoginData (x: Date | string){
    if(x instanceof Date){
        console.log(x.toTimeString);
    }else{
        console.log(x.lastIndexOf);
    }
}

type Fish = {
    swim: () => void;
}
type bird = {
    fly: () => void;

}

function isFish(pet: Fish | bird): pet is Fish{
    return (pet as Fish).swim() !== undefined

}

function getFood(pet: Fish | bird){
    if(isFish(pet)){
        pet
        return "Fish food is bird";
    }else{
        pet
        return "bird food is fish"
    }
}

interface Circle{
    kind: "Circle",
    radius: number,
}

interface Square{
    kind: "square",
    sides: number,

}


interface Rectangular{
    kind: 'rectangular',
    length: number,
    width: number,

}


type Shape = Circle | Rectangular | Square;

function getTrueShap(shape: Shape): number {
    if(shape.kind === "Circle"){
        return Math.PI * 2 * shape.radius * shape.radius;

    }else if(shape.kind === "square"){
        return shape.sides * 4
    }else{
        return shape.width * shape.length ;
    }

}

function getArea (shape: Shape){
    switch(shape.kind){
        case "Circle":
            console.log('hello')
        case "rectangular":
            console.log("Rectangular");

        case "square":
            return "hello"
        default:
            const _defaultforshape :never = shape;
            return _defaultforshape;

    }
}