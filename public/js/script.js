(function() {
    let startTime = new Date().getTime();

    window.addEventListener('load', function() {
        let endTime = new Date().getTime();
        let loadTime = endTime - startTime;

        document.getElementById('loadTime').innerHTML = 'Page loaded in ' + loadTime + 'ms' + '(client)';

        let currentUrl = document.location;
        let menuItems = document.querySelectorAll('.nav_li');
        for (let i = 0; i < menuItems.length; i++) {
            let link = menuItems[i].querySelector('a');
            if (currentUrl["href"].includes(link.href)) {
                menuItems[i].classList.add('nav_active');
            }
        }
    });
})();
