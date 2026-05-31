import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Имя не может быть короче 2 букв')
    .refine((val) => !/\d/.test(val), {
      message: 'Имя не должно содержать цифры',
    }),
  tel: z.string().refine(
    (val) => {
      const digits = val.replace(/\D/g, '');
      return digits.length === 11;
    },
    {
      message: 'Введите полный номер',
    }
  ),
  email: z.string().email('Введите корректный email'),
  message: z.string().optional(),
  itemId: z.string().optional(),
});

const useContactForm = (callback) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid, touchedFields },
    reset,
    setValue,
  } = useForm({
    resolver: zodResolver(contactSchema),
    mode: 'onBlur',
    defaultValues: {
      name: '',
      tel: '',
      email: '',
      message: '',
      itemId: '',
    },
  });

  const onSubmit = (data) => {
    const cleanData = {
      name: data.name.trim().toLowerCase(),
      tel: data.tel.replace(/\D/g, ''),
      email: data.email.trim().toLowerCase(),
      message: data.message?.trim() || '',
      itemId: data.itemId?.trim() || '',
    };
    callback?.(cleanData);
    reset();
  };
  return {
    register,
    control,
    errors,
    isValid,
    touchedFields,
    handleSubmit: handleSubmit(onSubmit),
    setValue,
  };
};

export default useContactForm;
