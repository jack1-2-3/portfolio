// ヒーロースライダークラス
class HeroSlider {
    constructor(el) {
        this.el = el;
        this.swiper = this._initSwiper();
    }

    // swiperの初期設定
    _initSwiper() {
        return new Swiper(this.el, {
            // Optional parameters
            // direction: 'vertical',
            loop: true,
            grabCursor: true,
            effect: 'coverflow',
            centeredSlides: true,
            slidesPerView: 1,
            speed: 1000,
            breakpoints: {
                1024: {
                    slidesPerView: 2,
                }
            },
        });
    }

    // スタートメソッド
    start(options = {}) {
        options = Object.assign({
            delay: 4000,
            disableOnInteraction: false
        }, options);
        
        // swiper内のparams.autoplayの初期設定
        this.swiper.params.autoplay = options;
        // swiper内のstart()メソッド
        this.swiper.autoplay.start(); 
    }

    // ストップメソッド
    stop() {
        // swiper内のstop()メソッド
        this.swiper.autoplay.stop(); 
    }
}