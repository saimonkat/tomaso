const mainNavInit = () => {
    const $header = document.querySelector('.header');
    const $navButton = document.querySelector('.hamburger');
    const $nav = document.querySelector(".header__nav");

    const menuClass = 'show-menu';
    const items = $nav.querySelectorAll(".nav__list > li")

    for (const item of items) {
        const $submenu = item.querySelector("ul")

        if($submenu) {
            item.addEventListener("click", (e) => {
                item.classList.toggle("submenu-open")
            })
        }
    }

    // Menu buttons
    $navButton.addEventListener('click', () => {
        $header.classList.toggle(menuClass);
        if ($header.classList.contains(menuClass)) {
            bodyFixPosition();
        } else {
            bodyUnfixPosition();
        }
    });

    // Fix body IOS
    function bodyFixPosition() {
        setTimeout( function() {
            if ( !document.body.hasAttribute('data-body-scroll-fix') ) {
                let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
                document.body.setAttribute('data-body-scroll-fix', scrollPosition);
                document.body.style.overflow = 'hidden';
                document.body.style.position = 'fixed';
                document.body.style.left = '0';
                document.body.style.width = '100%';
            }
        }, 500 );
    }

    // Unfix body IOS
    function bodyUnfixPosition() {
        if ( document.body.hasAttribute('data-body-scroll-fix') ) {
            let scrollPosition = document.body.getAttribute('data-body-scroll-fix');
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.left = '';
            document.body.style.width = '';
            window.scroll(0, scrollPosition);

            setTimeout(() => {
                document.body.removeAttribute('data-body-scroll-fix');
            }, 500)
        }
    }
};

window.addEventListener('DOMContentLoaded', mainNavInit);
