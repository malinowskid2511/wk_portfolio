function changeZIndex() {
    const aboutMeWindow = document.getElementById("aboutMe");
    const contactWindow = document.getElementById("contact");
    const portfolioWindow = document.getElementById("portfolio");
    if (aboutMeWindow.style.zIndex === "10") {
        aboutMeWindow.style.zIndex = "0";
        contactWindow.style.zIndex = "0";
        portfolioWindow.style.zIndex = "10";
    } else if (portfolioWindow.style.zIndex === "10") {
        aboutMeWindow.style.zIndex = "0";
        contactWindow.style.zIndex = "10";
        portfolioWindow.style.zIndex = "0";
    } else {
        aboutMeWindow.style.zIndex = "10";
        contactWindow.style.zIndex = "0";
        portfolioWindow.style.zIndex = "0";
    }
}
function openAboutMePage() {
    open("aboutMe.html", "_self")
}
function openContactPage() {
    open("contact.html", "_self")
}
function openPortfolioPage() {
    open("portfolio.html", "_self")
}


const modal1 = document.getElementById('myModal1');
const modal2 = document.getElementById('myModal2');
const modal3 = document.getElementById('myModal3');
const modal4 = document.getElementById('myModal4');
const modal5 = document.getElementById('myModal5');
const modalImg1 = document.getElementById('rm1');
const modalImg2 = document.getElementById('rm2');
const modalImg3 = document.getElementById('rm3');
const modalImg4 = document.getElementById('rm4');
const modalImg5 = document.getElementById('rm5');

function openModal(img) {


    if(img.id === "r1") {
        modal1.style.display = "block";
        modalImg1.src = "./images/portfolio/rysunki/r1.png";

    } else if(img.id === "r2") {
        modal2.style.display = "block";
        modalImg2.src = "./images/portfolio/rysunki/r2.png";

    } else if(img.id === "r3") {
        modal3.style.display = "block";
        modalImg3.src = "./images/portfolio/rysunki/r3.png";
    } else if(img.id === "r4") {
        modal4.style.display = "block";
        modalImg4.src = "./images/portfolio/rysunki/r4.png";
    } else if(img.id === "r5") {
        modal5.style.display = "block";
        modalImg5.src = "./images/portfolio/rysunki/r5.png";
    }
}

// Function to close the modal
function closeModal() {
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    modal4.style.display = "none";
    modal5.style.display = "none";
}

// Close the modal when clicking outside of the image
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}



