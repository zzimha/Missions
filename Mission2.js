import {beside, make_cross, rcross, stack, show, stackn, square, blank, stack_frac,quarter_turn_right} from "rune";

//Q1
function fractal(pic, n) {
    // your answer here
    return n === 1
    ? pic
    : fractal(beside(make_cross(rcross), stackn(2, pic)), n - 1);
}
  
  
show(fractal(make_cross(rcross), 5));  


//Q2
function hook(frac) {
    // your answer here
    return frac === 0
    ? square
    : stack(square,quarter_turn_right(stack_frac(frac, square, blank)));
    
    
    
}

// Test

show(hook(1));
show(hook(1/2));
show(hook(1/5));
//
// Test

//q3


function spiral(thickness,depth){
    return depth === 0
    ? blank
    : stack_frac(
        thickness, 
        hook(thickness/2), 
        quarter_turn_right(spiral(thickness, depth - 1)));
    
    
    //stack_frac(thickness, hook(thickness/2), quarter_turn_right(stack_frac(thickness, hook(thickness/2), blank)));
}

show(spiral(1/5, 2));
show(spiral(1 / 5, 3));
show(spiral(1 / 5, 20));



