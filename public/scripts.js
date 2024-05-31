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