import { memo } from 'react';
import clsx from 'clsx';
import { Controller } from 'react-hook-form';
import useContactForm from '@/hooks/useContactForm';
import useOrderSubmit from '@/hooks/useOrderSubmit';
import Input from '../shared/Input/Input';
import TextArea from '../shared/TextArea/TextArea';
import Button from '../shared/Button/Button';
import styles from './ContactForm.module.scss';
import { useEffect } from 'react';

const ContactForm = memo(({ item, variant = 'default' }) => {
  const { submitOrder } = useOrderSubmit();
  const {
    control,
    register,
    errors,
    isValid,
    touchedFields,
    handleSubmit,
    setValue,
  } = useContactForm((cleanData) => {
    submitOrder(cleanData);
  });

  useEffect(() => {
    if (item?.id) {
      setValue('itemId', item.id);
    }
    if (item?.title) {
      setValue(
        'message',
        `Здравствуйте! Заинтересовался позицией: ${item.title}`
      );
    }
  }, [item, setValue]);

  return (
    <form
      onSubmit={handleSubmit}
      className={styles.form}
    >
      <h2
        className={clsx(
          styles.title,
          'title',
          variant === 'order' && styles.titleOrder
        )}
      >
        Отправьте заявку
        <br />
        мы свяжемся с Вами!
      </h2>

      <div className={styles.top}>
        <div className={styles.fieldWrapper}>
          <label
            htmlFor='name'
            className='visually-hidden'
          >
            Имя
          </label>
          <Input
            id='name'
            variant={variant}
            type='text'
            placeholder='* Ваше имя'
            // {...(variant && { variant })}
            {...register('name')}
            error={errors.name}
          />
          {errors.name && touchedFields.name && (
            <span
              className={clsx(
                styles.error,
                variant === 'order' && styles.errorOrder
              )}
            >
              {errors.name.message}
            </span>
          )}
        </div>

        <div className={styles.fieldWrapper}>
          <label
            htmlFor='tel'
            className='visually-hidden'
          >
            Телефон
          </label>
          <Controller
            name='tel'
            control={control}
            render={({ field }) => (
              <Input
                id='tel'
                variant={variant}
                mask='+7 (000) 000-00-00'
                placeholder='+7 (___) ___-__-__'
                // {...(variant && { variant })}
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
                onBlur={field.onBlur}
                error={errors.tel}
              />
            )}
          />
          {errors.tel && touchedFields.tel && (
            <span
              className={clsx(
                styles.error,
                variant === 'order' && styles.errorOrder
              )}
            >
              {errors.tel.message}
            </span>
          )}
        </div>
      </div>

      <div className={styles.fieldWrapper}>
        <label
          htmlFor='email'
          className='visually-hidden'
        >
          Email
        </label>
        <Input
          id='email'
          variant={variant}
          type='email'
          placeholder='* e-mail'
          // {...(variant && { variant })}
          {...register('email')}
          error={errors.email}
        />
        {errors.email && touchedFields.email && (
          <span
            className={clsx(
              styles.error,
              variant === 'order' && styles.errorOrder
            )}
          >
            {errors.email.message}
          </span>
        )}
      </div>

      <div className={styles.fieldWrapper}>
        <label
          htmlFor='message'
          className='visually-hidden'
        >
          Комментарий
        </label>

        <TextArea
          id='message'
          variant={variant}
          placeholder='Комментарий'
          // {...(variant && { variant })}
          rows={4}
          {...register('message')}
        />
      </div>
      <input
        type='hidden'
        {...register('itemId')}
      />
      <Button
        variant='form'
        type='submit'
        disabled={!isValid}
      >
        Отправить
      </Button>
    </form>
  );
});

export default ContactForm;
