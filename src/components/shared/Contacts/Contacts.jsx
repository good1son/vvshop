const Contacts = () => {
  return (
    <address class='footer__contacts'>
      <div class='contacts__item'>
        <a
          class='contacts__link link'
          href='tel:+79261688022'
        >
          <svg
            class='contacts__icon icon-tel'
            width='24'
            height='24'
            aria-hidden='true'
          >
            <use href='./img/sprite.svg#tel-icon'></use>
          </svg>
          +7 (926) 168-80-22
        </a>
      </div>
      <div class='contacts__item'>
        <a
          class='contacts__link link'
          href='mailto:shop@shopvv.ru'
        >
          <svg
            class='contacts__icon icon-mail_old'
            width='24'
            height='24'
            aria-hidden='true'
          >
            <use href='./img/sprite.svg#mail-icon'></use>
          </svg>
          <svg
            class='contacts__icon icon-mail_new'
            width='24'
            height='24'
            aria-hidden='true'
          >
            <use href='./img/sprite.svg#mail-icon'></use>
          </svg>
          shop@shopvv.ru
        </a>
      </div>
      <div class='contacts__item contacts__item_street'>
        <span>Москва,&nbsp;</span>
        <span>ул. Садовая-Черногрязская, д. 5/9</span>
      </div>
      <div class='contacts__item'>
        <span class='work-hours-text'>
          <svg
            class='contacts__icon icon-clock'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-width='1.5'
            stroke-linecap='round'
            stroke-linejoin='round'
          >
            <circle
              cx='12'
              cy='12'
              r='9'
              stroke='currentColor'
              fill='none'
            />
            <line
              class='clock-hour'
              x1='12'
              y1='12'
              x2='12'
              y2='8'
              stroke='currentColor'
              stroke-width='1.5'
              transform='rotate(-60 12 12)'
            />
            <line
              class='clock-minute'
              x1='12'
              y1='12'
              x2='12'
              y2='5'
              stroke='currentColor'
              stroke-width='1.2'
              transform='rotate(180 12 12)'
            />
            <circle
              cx='12'
              cy='12'
              r='1.5'
              fill='currentColor'
              stroke='none'
            />
          </svg>
          Пн–Вс: 10:30 – 19:30
        </span>
      </div>
      <div class='socials'>
        <ul class='socials__list'>
          <li class='socials__item'>
            <a
              class='socials__link'
              href='https://vk.com'
              aria-label='Вконтакте'
            >
              <svg class='socials__icon icon-vk'>
                <use href='./img/sprite.svg#vk-icon'></use>
              </svg>
            </a>
          </li>
          <li class='socials__item'>
            <a
              class='socials__link'
              href='https://wa.me/79261688022'
              aria-label='WhatsApp'
            >
              <svg class='socials__icon icon-wa'>
                <use href='./img/sprite.svg#wa-icon'></use>
              </svg>
            </a>
          </li>
          <li class='socials__item'>
            <a
              class='socials__link'
              href='https://t.me/79261688022'
              aria-label='Telegram'
            >
              <svg class='socials__icon icon-tg'>
                <use href='./img/sprite.svg#tg-icon'></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </address>
  );
};

export default Contacts;
