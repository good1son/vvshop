import clsx from 'clsx';
import { VKIcon, WaIcon, TgIcon } from '@/assets/images/icons';
import styles from './Socials.module.scss';

const Socials = ({ variant }) => {
  const classes = clsx(styles.socials, variant && styles[variant]);
  const socials = [
    { href: 'https://vk.com', label: 'Вконтакте', Icon: VKIcon },
    {
      href: 'https://wa.me/79261688022',
      label: 'WhatsApp',
      Icon: WaIcon,
    },
    {
      href: 'https://t.me/79261688022',
      label: 'Telegram',
      Icon: TgIcon,
    },
  ];

  return (
    <div className={classes}>
      <ul className={styles.list}>
        {socials.map(({ href, label, Icon }) => (
          <li
            key={href}
            className={styles.item}
          >
            <a
              className={styles.link}
              href={href}
              aria-label={label}
            >
              <Icon className={styles.icon} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
