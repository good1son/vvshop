import clsx from 'clsx';
import { TelIcon, MailIcon } from '@/assets/images/icons';
import Socials from '../shared/Socials/Socials';
import styles from './Contacts.module.scss';

const Contacts = () => {
  return (
    <address className={styles.contacts}>
      <div className={styles.item}>
        <a
          className={clsx(styles.link, 'link')}
          href='tel:+79261688022'
        >
          <TelIcon className={clsx(styles.icon, styles.iconTel)} />
          +7 (926) 168-80-22
        </a>
      </div>
      <div className={styles.item}>
        <a
          className={clsx(styles.link, 'link')}
          href='mailto:shop@shopvv.ru'
        >
          <MailIcon
            className={clsx(styles.icon, styles.iconMailOld)}
          />
          <MailIcon
            className={clsx(styles.icon, styles.iconMailNew)}
          />
          shop@shopvv.ru
        </a>
      </div>
      <div className={clsx(styles.item, styles.itemStreet)}>
        <span>Москва,&nbsp;</span>
        <span>ул. Садовая-Черногрязская, д. 5/9</span>
      </div>
      <div className={styles.item}>
        <span className={styles.workHoursText}>
          <svg
            className={clsx(styles.icon, styles.iconClock)}
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <circle
              cx='12'
              cy='12'
              r='9'
              stroke='currentColor'
              fill='none'
            />
            <line
              className={styles.clockHour}
              x1='12'
              y1='12'
              x2='12'
              y2='8'
              stroke='currentColor'
              strokeWidth='1.5'
              transform='rotate(-60 12 12)'
            />
            <line
              className={styles.clockMinute}
              x1='12'
              y1='12'
              x2='12'
              y2='5'
              stroke='currentColor'
              strokeWidth='1.2'
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
      <Socials />
    </address>
  );
};

export default Contacts;
