document.addEventListener('DOMContentLoaded', () => {
    new Main;
})

class Main {
    constructor() {
        this.init = this._init();
        this._observers = [];
        this.scrollinit = this._scrollInit();
    }

    _init() {
        new MobileMenu();
        this.hero = new HeroSlider('.swiper-container');
    }

    // オブザーバー　セッター
    set observers(val) {
        this._observers.push(val);
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

    // スクロール感知
    _scrollInit() {
        // inviewアニメーション
        this.observers = new ScrollObserver('#profile', this._inviewAnimation);
        this.observers = new ScrollObserver('#skills', this._inviewAnimation);
        this.observers = new ScrollObserver('#portfolio', this._inviewAnimation);
        this.observers = new ScrollObserver('#works', this._inviewAnimation);
        this.observers = new ScrollObserver('#contact', this._inviewAnimation);

        // スライダー
        this.observers = new ScrollObserver('.swiper-container', this._toggleSlideAnimation.bind(this));
    }
}