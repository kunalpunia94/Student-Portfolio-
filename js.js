var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(const tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(const tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}

// -------for the menu in th responsive website
var sidemenu= document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right="0";
}

function closemenu(){
    sidemenu.style.right="-200px";
}

// added files using the extension tab then we added the functio from the github
// https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbGY0SDFCb3BLaDZtN3NwbDVrZEprNGJxbkNqd3xBQ3Jtc0trZVFmQ3hvVWFUZmE4ZUhPY1gxS1RRbXEyZnZaU29VV2Rxb2VWVXJQRWFKRHN1UjFfRnhtWFNFc24xbDhyWTMwbzFFQ2RGY01ydVRsT1lzU1kyeWNTNlk2QzlJTTFibVYyWFRaakVFdXNOb0JUNHJTVQ&q=https%3A%2F%2Fgithub.com%2Fjamiewilson%2Fform-to-google-sheets&v=0YFrGy_mzjY
//above that is the linl for that function


// for the show and hide text
const texts = ["Web Developer", "UI/UX Designer", "Software Developer","Data Analyst"];
        let currentIndex = 0;
        const textElement = document.getElementById('text');

        function showText(text, i, callback) {
            if (i < text.length) {
                textElement.textContent = text.substring(0, i + 1);
                setTimeout(() => showText(text, i + 1, callback), 100);
            } else if (callback) {
                setTimeout(callback, 1000); // Delay before starting to hide
            }
        }

        function hideText(text, i, callback) {
            if (i >= 0) {
                textElement.textContent = text.substring(0, i);
                setTimeout(() => hideText(text, i - 1, callback), 100);
            } else if (callback) {
                callback();
            }
        }

        function updateText() {
            const text = texts[currentIndex];
            showText(text, 0, () => {
                hideText(text, text.length - 1, () => {
                    currentIndex = (currentIndex + 1) % texts.length;
                    setTimeout(updateText, 500); // Small delay before next word starts
                });
            });
        }

        // Initial text setup
        updateText();

// GSAP for the wensite
gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline()
tl.from("#header",{
    y:100,
    duration:1,
    opacity:0,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#header",
        scroller:"body",
        start:"top 80%",
        end:"top 20%",
        scrub:2
        // markers: true
    }
})

tl.from("#about",{
    y:100,
    duration:1,
    opacity:0,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#about",
        scroller:"body",
        start:"top 80%",
        end:"top 20%",
        scrub:2
        // markers: true
    }
})

tl.from("#skill-Page h1",{
    y:100,
    opacity:0,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#skill-Page h1",
        scroller:"body",
        start:"top 80%",
        end:"top 20%",
        scrub:2
        // markers: true
    }
})
tl.from("#skill-Page .skills",{
    y:100,
    opacity:0,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#skill-Page .skills",
        scroller:"body",
        start:"top 80%",
        end:"top 20%",
        scrub:2
        // markers: true
    }
})

tl.from("#contact",{
    y:100,
    duration:1,
    opacity:0,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#contact",
        scroller:"body",
        start:"top 80%",
        end:"top 20%",
        scrub:2
        // markers: true
    }
})
tl.from("#portfolio",{
    y:100,
    duration:1,
    opacity:0,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#portfolio",
        scroller:"body",
        start:"top 80%",
        end:"top 20%",
        scrub:2
        // markers: true
    }
})