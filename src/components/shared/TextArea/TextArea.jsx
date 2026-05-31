import clsx from 'clsx';
import styles from './TextArea.module.scss';

const TextArea = (props) => {
  const {
    id,
    variant = 'default',
    value,
    placeholder,
    onChange,
    rows,
    className,
    error,
    ...rest
  } = props;
  const classes = clsx(
    styles[variant],
    error && styles.textAreaError,
    className
  );
  return (
    <textarea
      id={id}
      name={id}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      rows={rows}
      className={classes}
      {...rest}
    />
  );
};

export default TextArea;
