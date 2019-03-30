var show = document.getElementById('show');
var hide = document.getElementById('hide');
var toggle = document.getElementById('toggle');

console.log(show);
console.log(hide);
console.log(toggle);


// Target DIV

var targetDiv = document.getElementById('targetDiv');

console.log(targetDiv);

targetDiv.style.display = 'none';


show.addEventListener('click', () => {
    console.log('click');
    targetDiv.style.display = 'block';
});

hide.addEventListener('click', () => {
    console.log('click');
    targetDiv.style.display = 'none';
})

toggle.addEventListener('click', () => {
    console.log('click');
    if(targetDiv.style.display === 'block') {
        targetDiv.style.display = "none"
    } else {
        targetDiv.style.display = 'block'
    }
})