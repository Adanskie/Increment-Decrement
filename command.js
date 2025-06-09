const increment = document.getElementById('incrementButton');
const decrement = document.getElementById('decrementButton');
const reset = document.getElementById('resetButton');
const countDisplay = document.getElementById('Count');

let Count = 0;

increment.onclick = function()
{
    Count++;
    countDisplay.innerText = Count;
}
decrement.onclick = function()
{
    Count--;
    countDisplay.innerText = Count;
}
reset.onclick = function()
{
    Count = 0;
    countDisplay.innerText = Count;
}