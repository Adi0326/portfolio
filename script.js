document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("page-enter");

    document.querySelectorAll("a").forEach(link => {
        if (link.hostname === window.location.hostname) {
            link.addEventListener("click", (event) => {
                event.preventDefault();
                const url = link.href;
                document.body.classList.add("page-exit");

                setTimeout(() => {
                    window.location.href = url;
                }, 500); // Match animation duration
            });
        }
    });
});
