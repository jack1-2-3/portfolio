// モバイルメニュークラス
class MobileMenu {
    constructor() {
        this.headerNavInner = document.querySelector('.header-nav__inner');
        this.globalContainer = document.querySelector('.global-container');
        this.hamburgerMenu = document.querySelector('.hamburger-menu');
        this.eventType = this._getEventType();
        this.init = this._init();
    }

    // イベントタイプを取得
    _getEventType() {
        return window.ontouchstart ? 'touchstart' : 'click';
    }

    // 初期設定
    // ハンバーガーメニューをタッチまたはクリックした時に'menu-open'クラスをヘッダーナビゲーションインナーとグローバルコンテナに付与
    _init() {
        this.hamburgerMenu.addEventListener(this.eventType, () => {
            this.headerNavInner.classList.toggle('menu-open');
            this.globalContainer.classList.toggle('menu-open');
        })
    }
}