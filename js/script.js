/*====================================
    CURSOR FOLLOW BALL
====================================*/

const cursor = document.querySelector(".cursor");
 
let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

document.addEventListener("mousemove",(e)=>{

    mouseX = e.clientX;
    mouseY = e.clientY;

});

function animateCursor(){

    currentX += (mouseX-currentX)*0.15;
    currentY += (mouseY-currentY)*0.15;

    cursor.style.left = currentX + "px";
    cursor.style.top = currentY + "px";

    requestAnimationFrame(animateCursor);

}

animateCursor();


/*====================================
Cursor Grow
====================================*/

const links = document.querySelectorAll("a, button, .floating");

links.forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        cursor.style.width="45px";
        cursor.style.height="45px";

    });

    item.addEventListener("mouseleave",()=>{

        cursor.style.width="18px";
        cursor.style.height="18px";

    });

});


/*====================================
    HAMBURGER MENU
====================================*/

const menuBtn = document.querySelector(".menu-btn");

const mobileMenu = document.querySelector(".mobile-menu");

menuBtn.addEventListener("click",()=>{

    mobileMenu.classList.toggle("active");

});



/*====================================
Close menu after clicking link
====================================*/

const mobileLinks=document.querySelectorAll(".mobile-menu a");

mobileLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        mobileMenu.classList.remove("active");

    });

});


/*====================================
Navbar Background
====================================*/

const navbar=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        navbar.style.background="#111216";
        navbar.style.boxShadow="0 10px 30px rgba(0,0,0,.25)";

    }

    else{

        navbar.style.background="transparent";
        navbar.style.boxShadow="none";

    }

});


/*====================================
Reveal Animation
====================================*/

const revealItems=document.querySelectorAll(".about,.hero-bottom");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

},{
threshold:0.2
});

revealItems.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(70px)";

item.style.transition="1s";

observer.observe(item);

});


/*====================================
Floating Tags Animation
====================================*/

const tags=document.querySelectorAll(".floating");

document.addEventListener("mousemove",(e)=>{

let x=(window.innerWidth/2-e.clientX)/40;

let y=(window.innerHeight/2-e.clientY)/40;

tags.forEach(tag=>{

tag.style.transform=`translate(${x}px,${y}px)`;

});

});


/*====================================
Hero Image Parallax
====================================*/

const image=document.querySelector(".hero-image img");

document.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.clientX)/60;

const y=(window.innerHeight/2-e.clientY)/60;

image.style.transform=
`translate(${x}px,${y}px)`;

});


/*====================================
Typing Effect (Optional)
====================================*/

const intro=document.querySelector(".intro span");

const text=intro.innerText;

intro.innerText="";

let index=0;

function type(){

if(index<text.length){

intro.innerHTML+=text.charAt(index);

index++;

setTimeout(type,90);

}

}

window.onload=()=>{

type();

};


/*====================================
Smooth Floating Image
====================================*/

let angle=0;

setInterval(()=>{

angle+=0.02;

image.style.marginTop=Math.sin(angle)*10+"px";

},20);


/*====================================
Button Ripple Effect
====================================*/

document.querySelectorAll("a").forEach(link=>{

link.addEventListener("hover",function(e){

let ripple=document.createElement("span");

ripple.classList.add("ripple");

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},500);

});

});


/*====================================
Console Signature
====================================*/

console.log("%cDesigned & Developed by YOU","color:#00ffcc;font-size:18px;font-weight:bold;");
/*====================================
PROJECT CARD REVEAL
====================================*/

const projectCards = document.querySelectorAll(".project-card");

if(projectCards.length){

const projectObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0px)";

}

});

},{
threshold:0.2
});

projectCards.forEach((card,index)=>{

card.style.opacity="0";
card.style.transform="translateY(80px)";
card.style.transition=`${0.5 + index*0.15}s`;

projectObserver.observe(card);

});

}


/*====================================
FEATURED PROJECT PARALLAX
====================================*/

const featuredImage=document.querySelector(".featured-image img");

if(featuredImage){

document.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.clientX)/80;

const y=(window.innerHeight/2-e.clientY)/80;

featuredImage.style.transform=
`translate(${x}px,${y}px) scale(1.03)`;

});

}


/*====================================
PROJECT CARD TILT
====================================*/

projectCards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*12;

const rotateX=((y/rect.height)-0.5)*-12;

card.style.transform=

`perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=
"perspective(900px) rotateX(0deg) rotateY(0deg)";

});

});


/*====================================
BUTTON RIPPLE
====================================*/

document.querySelectorAll(".project-buttons a").forEach(btn=>{

btn.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";
ripple.style.height=size+"px";

ripple.style.left=(e.clientX-rect.left-size/2)+"px";
ripple.style.top=(e.clientY-rect.top-size/2)+"px";

ripple.className="ripple";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});


/*====================================
HOVER GLOW
====================================*/

projectCards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow="0 40px 80px rgba(32,216,181,.18)";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow="";

});

});


/*====================================
CONSOLE SIGNATURE
====================================*/

console.log("%cProjects Loaded Successfully","color:#20d8b5;font-size:18px;font-weight:bold;");
/*====================================
ACTIVE NAVIGATION ON SCROLL
====================================*/

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});