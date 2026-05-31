import styles from './CheckboxFilter.module.scss';

const CheckboxFilter = ({ label, checked, onChange }) => {
  return (
    <label className={styles.checkboxLabel}>
      <input
        type='checkbox'
        checked={checked}
        onChange={onChange}
      />
      <span className={styles.checkmark}></span>
      <span>{label}</span>
    </label>
  );
};

export default CheckboxFilter;
