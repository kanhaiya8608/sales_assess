//./utils/validationSchema.js
import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  fields: Yup.array().of(
    Yup.object().shape({
      value: Yup.string().required('This field is required'),
    })
  ),
});
