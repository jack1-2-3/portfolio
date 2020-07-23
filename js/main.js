document.addEventListener('DOMContentLoaded', () => {
    new Main();
});

class Main {
    constructor() {
        this.header = document.querySelector('.header');
        this.init = this._init();
        this.scrollinit = this._scrollInit();
    }

    _init() {
        new MobileMenu();
        this.hero = new HeroSlider('.swiper-container');
    }


    // inviewアニメーション
    _inviewAnimation(el, inview) {
        if(inview) {
            el.classList.add('inview');
        } else {
            el.classList.remove('inview');
        }
    }

    // スライダーのスタート・ストップ
    _toggleSlideAnimation(el, inview) {
        if(inview) {
            this.hero.start();
        } else {
            this.hero.stop();
        }
    }

    _toggleTriggered(el, inview) {
        if(inview) {
            this.header.classList.remove('triggered');
        } else {
            this.header.classList.add('triggered');
        }
    }

    // スクロール感知
    _scrollInit() {
        // inviewアニメーション
        new ScrollObserver('#profile', this._inviewAnimation);
        new ScrollObserver('#skills', this._inviewAnimation);
        new ScrollObserver('#portfolio', this._inviewAnimation);
        new ScrollObserver('#works', this._inviewAnimation);
        new ScrollObserver('#contact', this._inviewAnimation);

        // スライダー
        new ScrollObserver('.swiper-container', this._toggleSlideAnimation.bind(this), {once: false});

        // ヘッダーtriggered
        new ScrollObserver('.header-scroll', this._toggleTriggered.bind(this), {once: false});
    }
}