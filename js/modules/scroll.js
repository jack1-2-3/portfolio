// スクロール感知のクラス
class ScrollObserver {
    constructor(els, cb, options) {
        this.els = document.querySelectorAll(els);
        this.cb = cb;
        this.options = Object.assign({
            root: null,
            rootmargin: '0px',
            threshold: 0.3,
            once: true
        }, options);
        this.once = this.options.once;
        this.init = this._init();
    }

    // 初期設定
    _init() {
        // コールバック
        const callback = (entries, observer) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    // cbコールバック
                    this.cb(entry.target,entry.isIntersecting);
                    if(this.once) {
                        observer.unobserve(entry.target);
                    }
                } else {
                    this.cb(entry.target, entry.isIntersecting);
                }
            })
        }

        // IntersectionObserverのインスタンス呼び出し
        const io = new IntersectionObserver(callback, this.options);
        // 要素監視
        this.els.forEach(el => io.observe(el));
    }
}