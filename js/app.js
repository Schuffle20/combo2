//UI
const body = document.body;
const slides = document.querySelectorAll('.slide');
// console.log(body);
const leftbtn = document.getElementById('left');
const rightbtn = document.getElementById('right');

let activeslide = 0;

let currentactive = 1;
// For Next Page

const progress = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const ones = document.querySelectorAll('.one');

const mainpage = document.getElementById('main');
const navpage = document.getElementById('pagenav')
const nextpage = document.getElementById('new');

const mainbtn = document.getElementById('click');

nextpage.style.display = 'none';


function setbody() {
    mainpage.style.backgroundImage = slides[activeslide].style.backgroundImage;

}
setbody();

function setactiveslide() {
    // slides.forEach((slide) => {
    //     slide.classList.remove('active');
    // });

    slides.forEach(slide => slide.classList.remove('active'));
    slides[activeslide].classList.add('active');
}

rightbtn.addEventListener('click', function() {
    activeslide++;
    // console.log(activeslide);
    if (activeslide > slides.length - 1) {
        activeslide = 0;
        // activeslide = 5;

    }
    console.log(activeslide);
    setbody();
    setactiveslide();


});

leftbtn.addEventListener('click', function() {
    activeslide--;
    // console.log(activeslide);
    if (activeslide < 0) {
        activeslide = slides.length - 1;
        // activeslide = 0;

    }
    console.log(activeslide);
    setbody();
    setactiveslide();


});

mainbtn.addEventListener('click', function() {
    mainpage.style.display = 'none';
    navpage.style.display = 'block';
});

//For Nav Page


const a = document.getElementById('p1');
const b = document.getElementById('p2');
const c = document.getElementById('p3');
const d = document.getElementById('p4');

const one = document.getElementById('a');
const two = document.getElementById('b');
const three = document.getElementById('c');
const four = document.getElementById('d');


const stepsbtn = document.getElementById('n');

navpage.style.display = "none";

two.style.display = "none";
three.style.display = "none";
four.style.display = "none";

a.addEventListener('click', () => {
    one.style.display = "block";
    two.style.display = "none";
    three.style.display = "none";
    four.style.display = "none";

})


b.addEventListener('click', () => {
    one.style.display = "none";
    two.style.display = "block";
    three.style.display = "none";
    four.style.display = "none";

})


c.addEventListener('click', () => {
    one.style.display = "none";
    two.style.display = "none";
    three.style.display = "block";
    four.style.display = "none";

})


d.addEventListener('click', () => {
    one.style.display = "none";
    two.style.display = "none";
    three.style.display = "none";
    four.style.display = "block";

})

stepsbtn.addEventListener('click', () => {
    navpage.style.display = 'none';
    nextpage.style.display = 'block';

})




// For Next Page

next.addEventListener('click', () => {
    currentactive++;
    activeslide++;

    if (currentactive > circles.length) {
        currentactive = circles.length;


    }
    // console.log(activeslide);
    if (activeslide > ones.length - 1) {
        activeslide = 0;
        // activeslide = 5;

    }

    update();
    update1();







    // console.log(currentactive);
});

prev.addEventListener('click', () => {
    currentactive--;
    activeslide--;
    if (currentactive < 1) {
        currentactive = 1;
    }
    if (activeslide < 0) {
        activeslide = ones.length - 1;
        // activeslide = 0;

    }


    update();
    update1();

    // console.log(currentactive);
});


function update() {
    circles.forEach((circle, index) => {
        if (index < currentactive) {
            circle.classList.add('active');

        } else {
            circle.classList.remove('active')
        }

        if (currentactive === 1) {
            prev.disabled = true;
        } else if (currentactive === circles.length) {
            next.disabled = true;

        } else {
            prev.disabled = false;
            next.disabled = false;
        }
        const actives = document.querySelectorAll('.active');

        let act = actives.length - 1;
        let cls = circles.length - 1;

        progress.style.width = (act) / (cls) * 100 + '%';

    });
}

function update1() {
    ones.forEach((one) => {
        one.classList.remove('dis');

    });
    ones[activeslide].classList.add('dis');
}