import clsx from 'clsx';
import { IMaskInput } from 'react-imask';
import styles from './Input.module.scss';

const Input = (props) => {
  const {
    id,
    variant = 'default',
    type = 'text',
    value,
    placeholder,
    inputMode,
    onChange,
    className,
    error,
    mask,
    ...rest
  } = props;

  const classes = clsx(
    styles[variant],
    error && styles.inputError,
    className
  );
  if (mask) {
    return (
      <IMaskInput
        id={id}
        name={id}
        mask={mask}
        lazy={false}
        value={value}
        placeholder={placeholder}
        inputMode={inputMode}
        onAccept={(val) => {
          onChange({ target: { id, value: val || '' } });
        }}
        className={classes}
        {...rest}
      />
    );
  }

  return (
    <input
      id={id}
      name={id}
      type={type}
      value={value}
      placeholder={placeholder}
      inputMode={inputMode}
      onChange={onChange}
      className={classes}
      {...rest}
    />
  );
};

export default Input;
