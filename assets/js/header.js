fetch("shared/header.html")
    .then(res => res.text())
    .then(html => {
        document.getElementById("site-header").innerHTML = html;

        const title = document.getElementById("page-title");
        if (title && window.pageTitle) {
            title.textContent = window.pageTitle;
        }
    })
    .catch(err => console.error("Header failed to load:", err));