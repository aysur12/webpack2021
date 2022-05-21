class Slider {
  static PREFIX = 'slider';

  static CLASS_NAME_ITEM = `${Slider.PREFIX}__item`;

  static CLASS_NAME_ITEM_ACTIVE = `${Slider.PREFIX}__item_active`;

  static CLASS_NAME_ITEMS = `${Slider.PREFIX}__items`;

  static CLASS_NAME_INDICATOR = `${Slider.PREFIX}__indicator`;

  static CLASS_NAME_INDICATOR_ACTIVE = `${Slider.PREFIX}__indicator_active`;

  static CLASS_NAME_INDICATORS = `${Slider.PREFIX}__indicators`;

  static CLASS_NAME_CONTROL = `${Slider.PREFIX}__control`;

  static CLASS_NAME_CONTROL_PREV = `${Slider.PREFIX}__control_prev`;

  static CLASS_NAME_CONTROL_NEXT = `${Slider.PREFIX}__control_next`;

  static CLASS_NAME_CONTROL_SHOW = `${Slider.PREFIX}__control_show`;

  static SELECTOR_ITEMS = `.${Slider.CLASS_NAME_ITEMS}`;

  static SELECTOR_ITEM = `.${Slider.CLASS_NAME_ITEM}`;

  static SELECTOR_ITEM_ACTIVE = `.${Slider.CLASS_NAME_ITEM_ACTIVE}`;

  static SELECTOR_INDICATOR_ACTIVE = `.${Slider.CLASS_NAME_INDICATOR_ACTIVE}`;

  static SELECTOR_INDICATORS = `.${Slider.CLASS_NAME_INDICATORS}`;

  static SELECTOR_WRAPPER = `.${Slider.PREFIX}__wrapper`;

  static SELECTOR_CONTROL = `.${Slider.CLASS_NAME_CONTROL}`;

  static SELECTOR_CONTROL_NEXT = `.${Slider.CLASS_NAME_CONTROL_NEXT}`;

  static SELECTOR_CONTROL_PREV = `.${Slider.CLASS_NAME_CONTROL_PREV}`;

  static SWIPE_THRESHOLD = 20;

  static TRANSITION_NONE = 'transition-none';

  constructor(target, config) {
    this._el = typeof target === 'string' ? document.querySelector(target) : target;
    this._elWrapper = this._el.querySelector(Slider.SELECTOR_WRAPPER);
    this._elItems = this._el.querySelector(Slider.SELECTOR_ITEMS);
    this._elsItem = this._el.querySelectorAll(Slider.SELECTOR_ITEM);
    this._currentIndex = 0;
    this._minOrder = 0;
    this._maxOrder = 0;
    this._$itemWithMinOrder = null;
    this._$itemWithMaxOrder = null;
    this._minTranslate = 0;
    this._maxTranslate = 0;
    this._direction = 'next';
    this._balancingItemsFlag = false;
    this._transform = 0;
    this._width = this._elWrapper.getBoundingClientRect().width;
    this._supportResizeObserver = typeof window.ResizeObserver !== 'undefined';
    this._hasSwipeState = false;
    this._swipeStartPosX = 0;
    this._intervalId = null;
    const defaultConfig = {
      autoplay: false,
      loop: true,
      indicators: true,
      interval: 5000,
      swipe: true,
    };
    this._config = Object.assign(defaultConfig, config);
    this._elItems.dataset.translate = 0;
    this._elsItem.forEach((item, index) => {
      const itemSlider = item;
      itemSlider.dataset.order = index;
      itemSlider.dataset.index = index;
      itemSlider.dataset.translate = 0;
    });
    if (this._config.loop) {
      const count = this._elsItem.length - 1;
      const translate = -this._elsItem.length;
      this._elsItem[count].dataset.order = -1;
      this._elsItem[count].dataset.translate = -this._elsItem.length;
      const translateX = translate * this._width;
      this._elsItem[count].style.transform = `translateX(${translateX}px)`;
    }
    this._addIndicators();
    this._refreshExtremeValues();
    this._setActiveClass();
    this._addEventListener();
    this._autoplay();
  }

  _setActiveClass() {
    /* eslint-disable no-unused-expressions */
    const elActive = this._el.querySelector(Slider.SELECTOR_ITEM_ACTIVE);
    elActive ? elActive.classList.remove(Slider.CLASS_NAME_ITEM_ACTIVE) : null;
    const elActiveNew = this._el.querySelector(`[data-index="${this._currentIndex}"]`);
    elActiveNew ? elActiveNew.classList.add(Slider.CLASS_NAME_ITEM_ACTIVE) : null;

    const elIndicatorActive = this._el.querySelector(Slider.SELECTOR_INDICATOR_ACTIVE);
    elIndicatorActive
      ? elIndicatorActive.classList.remove(Slider.CLASS_NAME_INDICATOR_ACTIVE)
      : null;
    const elIndicatorNew = this._el.querySelector(`[data-slide-to="${this._currentIndex}"]`);
    elIndicatorNew ? elIndicatorNew.classList.add(Slider.CLASS_NAME_INDICATOR_ACTIVE) : null;

    const elPrevBtn = this._el.querySelector(Slider.SELECTOR_CONTROL_PREV);
    const elNextBtn = this._el.querySelector(Slider.SELECTOR_CONTROL_NEXT);
    elPrevBtn ? elPrevBtn.classList.add(Slider.CLASS_NAME_CONTROL_SHOW) : null;
    elNextBtn ? elNextBtn.classList.add(Slider.CLASS_NAME_CONTROL_SHOW) : null;
    if (!this._config.loop && this._currentIndex === 0) {
      elPrevBtn.classList.remove(Slider.CLASS_NAME_CONTROL_SHOW);
    } else if (!this._config.loop && this._currentIndex === this._elsItem.length - 1) {
      elNextBtn.classList.remove(Slider.CLASS_NAME_CONTROL_SHOW);
    }
    /* eslint-disable-line */
    this._el.dispatchEvent(new CustomEvent('active.itc.slider', {
      bubbles: true,
    }));
  }

  _move(useTransition) {
    let translateX;
    this._elItems.classList.remove(Slider.TRANSITION_NONE);
    if (useTransition === false) {
      this._elItems.classList.add(Slider.TRANSITION_NONE);
    }
    if (this._direction === 'none') {
      translateX = this._transform * this._width;
      this._elItems.style.transform = `translateX(${translateX}px)`;
      return;
    }
    if (!this._config.loop) {
      const condition = this._currentIndex + 1 >= this._elsItem.length;
      if (condition && this._direction === 'next') {
        this._autoplay('stop');
        return;
      }
      if (this._currentIndex <= 0 && this._direction === 'prev') {
        return;
      }
    }
    /* eslint-disable no-plusplus */
    const step = this._direction === 'next' ? -1 : 1;
    const transform = this._transform + step;
    if (this._direction === 'next') {
      if (++this._currentIndex > this._elsItem.length - 1) {
        this._currentIndex -= this._elsItem.length;
      }
    } else if (--this._currentIndex < 0) {
      this._currentIndex += this._elsItem.length;
    }
    this._transform = transform;
    this._elItems.dataset.translate = transform;
    translateX = transform * this._width;
    this._elItems.style.transform = `translateX(${translateX}px)`;
    this._elItems.dispatchEvent(new CustomEvent('transition-start', {
      bubbles: true,
    }));
    this._setActiveClass();
  }

  _moveTo(index, useTransition) {
    const currentIndex = this._currentIndex;
    this._direction = index > currentIndex ? 'next' : 'prev';
    for (let i = 0; i < Math.abs(index - currentIndex); i++) {
      this._move(useTransition);
    }
  }

  _autoplay = function (action) {
    if (!this._config.autoplay) {
      return;
    }
    if (action === 'stop') {
      clearInterval(this._intervalId);
      this._intervalId = null;
      return;
    }
    if (this._intervalId === null) {
      this._intervalId = setInterval(
        () => {
          this._direction = 'next';
          this._move();
        },
        this._config.interval,
      );
    }
  };

  _addIndicators() {
    if (this._el.querySelector(Slider.SELECTOR_INDICATORS) || !this._config.indicators) {
      return;
    }
    let html = '';
    for (let i = 0, { length } = this._elsItem; i < length; i++) {
      html += `<li class="${Slider.CLASS_NAME_INDICATOR}" data-slide-to="${i}"></li>`;
    }
    this._el.insertAdjacentHTML('beforeend', `<ol class="${Slider.CLASS_NAME_INDICATORS}">${html}</ol>`);
  }

  _refreshExtremeValues() {
    this._minOrder = parseInt(this._elsItem[0].dataset.order, 10);
    this._maxOrder = this._minOrder;
    const [firstElsItem] = this._elsItem;
    this._$itemWithMinOrder = firstElsItem;
    this._$itemWithMaxOrder = this._$itemWithMinOrder;
    this._minTranslate = parseInt(this._elsItem[0].dataset.translate, 10);
    this._maxTranslate = this._minTranslate;
    /* eslint-disable-line */
    for (let i = 0, { length } = this._elsItem; i < length; i++) {
      const $item = this._elsItem[i];
      const order = parseInt($item.dataset.order, 10);
      if (order < this._minOrder) {
        this._minOrder = order;
        this._$itemWithMinOrder = $item;
        this._minTranslate = parseInt($item.dataset.translate, 10);
      } else if (order > this._maxOrder) {
        this._maxOrder = order;
        this._$itemWithMaxOrder = $item;
        this._maxTranslate = parseInt($item.dataset.translate, 10);
      }
    }
  }

  _balancingItems() {
    if (!this._balancingItemsFlag) {
      return;
    }
    const $wrapper = this._elWrapper;
    const wrapperRect = $wrapper.getBoundingClientRect();
    const halfWidthItem = wrapperRect.width / 2;
    const count = this._elsItem.length;
    let translate;
    let clientRect;
    let translateX;
    if (this._direction === 'next') {
      const wrapperLeft = wrapperRect.left;
      const $min = this._$itemWithMinOrder;
      translate = this._minTranslate;
      clientRect = $min.getBoundingClientRect();
      if (clientRect.right < wrapperLeft - halfWidthItem) {
        $min.dataset.order = this._minOrder + count;
        translate += count;
        $min.dataset.translate = translate;
        translateX = translate * this._width;
        $min.style.transform = `translateX(${translateX}px)`;
        this._refreshExtremeValues();
      }
    } else if (this._direction === 'prev') {
      const wrapperRight = wrapperRect.right;
      const $max = this._$itemWithMaxOrder;
      translate = this._maxTranslate;
      clientRect = $max.getBoundingClientRect();
      if (clientRect.left > wrapperRight + halfWidthItem) {
        $max.dataset.order = this._maxOrder - count;
        translate -= count;
        $max.dataset.translate = translate;
        translateX = translate * this._width;
        $max.style.transform = `translateX(${translateX}px)`;
        this._refreshExtremeValues();
      }
    }
    requestAnimationFrame(this._balancingItems.bind(this));
  }

  _addEventListener() {
    const $items = this._elItems;

    function onClick(e) {
      const $target = e.target;
      this._autoplay('stop');
      if ($target.classList.contains(Slider.CLASS_NAME_CONTROL)) {
        e.preventDefault();
        this._direction = $target.dataset.slide;
        this._move();
      } else if ($target.dataset.slideTo) {
        e.preventDefault();
        const index = parseInt($target.dataset.slideTo, 10);
        this._moveTo(index);
      }
      if (this._config.loop) {
        this._autoplay();
      }
    }

    function onTransitionStart() {
      if (this._balancingItemsFlag) {
        return;
      }
      this._balancingItemsFlag = true;
      window.requestAnimationFrame(this._balancingItems.bind(this));
    }

    function onTransitionEnd() {
      this._balancingItemsFlag = false;
      this._el.dispatchEvent(new CustomEvent('transition-end', {
        bubbles: true,
      }));
    }

    function onMouseEnter() {
      this._autoplay('stop');
    }

    function onMouseLeave() {
      if (this._config.loop) {
        this._autoplay();
      }
    }

    function onSwipeStart(e) {
      this._autoplay('stop');
      if (e.target.closest(Slider.CLASS_NAME_CONTROL)) {
        return;
      }
      const event = e.type.search('touch') === 0 ? e.touches[0] : e;
      this._swipeStartPosX = event.clientX;
      this._swipeStartPosY = event.clientY;
      this._hasSwipeState = true;
      this._hasSwiping = false;
    }

    function onSwipeMove(e) {
      if (!this._hasSwipeState) {
        return;
      }
      const event = e.type.search('touch') === 0 ? e.touches[0] : e;
      let diffPosX = this._swipeStartPosX - event.clientX;
      const diffPosY = this._swipeStartPosY - event.clientY;
      if (!this._hasSwiping) {
        if (Math.abs(diffPosY) > Math.abs(diffPosX) || Math.abs(diffPosX) === 0) {
          this._hasSwipeState = false;
          return;
        }
        this._hasSwiping = true;
      }
      e.preventDefault();
      if (!this._config.loop) {
        if (this._currentIndex + 1 >= this._elsItem.length && diffPosX >= 0) {
          diffPosX /= 4;
        }
        if (this._currentIndex <= 0 && diffPosX <= 0) {
          diffPosX /= 4;
        }
      }
      const value = (diffPosX / this._elWrapper.getBoundingClientRect().width);
      let translateX = this._transform - value;
      this._elItems.classList.add(Slider.TRANSITION_NONE);
      translateX *= this._width;
      this._elItems.style.transform = `translateX(${translateX}px)`;
    }

    function onSwipeEnd(e) {
      if (!this._hasSwipeState) {
        return;
      }
      const event = e.type.search('touch') === 0 ? e.changedTouches[0] : e;
      let diffPosX = this._swipeStartPosX - event.clientX;
      if (diffPosX === 0) {
        this._hasSwipeState = false;
        return;
      }
      if (!this._config.loop) {
        if (this._currentIndex + 1 >= this._elsItem.length && diffPosX >= 0) {
          diffPosX /= 7;
        }
        if (this._currentIndex <= 0 && diffPosX <= 0) {
          diffPosX /= 7;
        }
      }
      const value = (diffPosX / this._elWrapper.getBoundingClientRect().width) * 100;
      this._elItems.classList.remove(Slider.TRANSITION_NONE);
      if (value > Slider.SWIPE_THRESHOLD) {
        this._direction = 'next';
        this._move();
      } else if (value < -Slider.SWIPE_THRESHOLD) {
        this._direction = 'prev';
        this._move();
      } else {
        this._direction = 'none';
        this._move();
      }
      this._hasSwipeState = false;
      if (this._config.loop) {
        this._autoplay();
      }
    }

    function onDragStart(e) {
      e.preventDefault();
    }

    function onVisibilityChange() {
      if (document.visibilityState === 'hidden') {
        this._autoplay('stop');
      } else if (document.visibilityState === 'visible') {
        if (this._config.loop) {
          this._autoplay();
        }
      }
    }
    this._el.addEventListener('click', onClick.bind(this));
    if (this._config.loop) {
      $items.addEventListener('transition-start', onTransitionStart.bind(this));
      $items.addEventListener('transitionend', onTransitionEnd.bind(this));
    }
    if (this._config.autoplay) {
      this._el.addEventListener('mouseenter', onMouseEnter.bind(this));
      this._el.addEventListener('mouseleave', onMouseLeave.bind(this));
    }
    if (this._config.swipe) {
      const supportsPassive = false;
      try {
        const opts = Object.defineProperty({}, 'passive', {
          get() {
            return supportsPassive === true;
          },
        });
        window.addEventListener('testPassiveListener', null, opts);
      } catch (err) {}
      this._el.addEventListener(
        'touchstart',
        onSwipeStart.bind(this),
        supportsPassive ? {
          passive: false,
        } : false,
      );
      this._el.addEventListener(
        'touchmove',
        onSwipeMove.bind(this),
        supportsPassive ? {
          passive: false,
        } : false,
      );
      this._el.addEventListener('mousedown', onSwipeStart.bind(this));
      this._el.addEventListener('mousemove', onSwipeMove.bind(this));
      document.addEventListener('touchend', onSwipeEnd.bind(this));
      document.addEventListener('mouseup', onSwipeEnd.bind(this));
      document.addEventListener('mouseout', onSwipeEnd.bind(this));
    }
    this._el.addEventListener('dragstart', onDragStart.bind(this));
    document.addEventListener('visibilitychange', onVisibilityChange.bind(this));

    function onResizeObserver(entries) {
      const { contentBoxSize } = entries[0];
      const { contentRect } = entries[0];
      const newWidth = contentRect
        ? contentRect.width
        : (contentBoxSize[0] || contentBoxSize).inlineSize;
      let newTranslateX;
      if (this._width.toFixed(1) === newWidth.toFixed(1)) {
        return;
      }
      this._autoplay('stop');
      this._elItems.classList.add(Slider.TRANSITION_NONE);
      this._width = parseInt(newWidth.toFixed(1), 10);
      newTranslateX = newWidth * parseInt(this._elItems.dataset.translate, 10);
      this._elItems.style.transform = `translateX(${newTranslateX}px)`;
      for (let i = 0; i < $items.length; i++) {
        const translateX = parseInt($items[i].dataset.translate, 10);
        newTranslateX = translateX * newWidth;
        $items[i].style.transform = `translateX(${newTranslateX}px)`;
      }
      if (this._config.loop) {
        this._autoplay();
      }
    }
    if (this._supportResizeObserver) {
      const resizeObserver = new ResizeObserver(onResizeObserver.bind(this));
      resizeObserver.observe(this._elWrapper);
    }
  }

  next() {
    this._direction = 'next';
    this._move();
  }

  prev() {
    this._direction = 'prev';
    this._move();
  }

  autoplay(action) {
    this._autoplay('stop');
  }

  moveTo(index, useTransition) {
    this._moveTo(index, useTransition);
  }
}

export default Slider;
