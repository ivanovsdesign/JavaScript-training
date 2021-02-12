toggleBtn = document.querySelector(".sidebar-toggle");
closeBtn = document.querySelector(".close-btn");
sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", () => {
    /* if (sidebar.classList.contains("show-sidebar")) {
        sidebar.classList.remove("show-sidebar");
    }
    else {
        sidebar.classList.add("show-sidebar");
    } */  //variant with if else statement
    
    //replacing if else statement with just single function "toggle"

    sidebar.classList.toggle("show-sidebar");
})

closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("show-sidebar");
})


