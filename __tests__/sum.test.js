// sum.test.js


//test 1
test('adds 1 + 2 to equal 3', () =>{
    expect(1+2).toBe(3);
});


//test 2
import { sum } from '../scripts/sum.js';
function test1(){  
    expect(sum(1, 2)).toBe(3); 
}
test('adds 1 + 2 to equal 3', test1);