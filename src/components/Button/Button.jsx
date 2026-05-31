import styles from './Button.module.scss';

const Button = ({ variant, children, ...props }) => {
  const variantClass = variant ? styles[variant] : '';
  return (
    <button
      className={`${styles.button} ${variantClass}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
