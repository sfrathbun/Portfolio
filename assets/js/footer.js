fetch("shared/footer.html")
    .then(res => res.text())
    .then(html => {
        document.getElementById("site-footer").innerHTML = html;
    })
    .catch(err => {
        console.error("Footer failed to load:", err);
    });