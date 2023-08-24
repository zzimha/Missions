import {make_cross, show, rcross,beside,stack} from "rune";

function fractal(pic, n) {
    // your answer here
    return cross_iter(pic,n,1);
}

function cross_iter(pic, n, count){
    return count === n //count stops when === n
    ? pic
    : beside(pic, cross_iter(stack(pic,pic), n, count + 1)); 
    
}

show(fractal(make_cross(rcross), 3));
show(fractal(make_cross(rcross), 5));

