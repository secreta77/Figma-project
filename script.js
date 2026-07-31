        const burger = document.querySelector('.header_burger');
        const nav = document.getElementById('header-nav');

        burger.addEventListener('click', function () {
            let isOpen = nav.classList.toggle('is-open');
            burger.setAttribute('aria-expanded', isOpen);
        });


        let resizeTimer;
        window.addEventListener('resize', function () {
            document.body.classList.add('resize-animation-stopper');
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function () {
                document.body.classList.remove('resize-animation-stopper');
            }, 400);
        });