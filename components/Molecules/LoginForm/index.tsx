import { Formik } from 'formik';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
// import { useUser } from '../../../providers/User';

import Button from '../../atoms/Button';
import Checkbox from '../../atoms/Checkbox';
import Input from '../../atoms/Input';
import { CheckboxWrapper, Form, InputWrapper, Text } from './styles';

const LoginForm = () => {
  const router = useRouter();

  const FormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Mínimo de 3 carácteres')
      .matches(
        /^([a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð '])+$/u,
        'Apenas letras permitidas'
      ),
  });
  return (
    <div>
      <Text>Please, enter your full name below</Text>
      <Text style={{ paddingTop: '16px' }}>
        Only alphabetical characters are accepted
      </Text>

      <Formik
        validationSchema={FormSchema}
        initialValues={{ name: '', isAdult: false }}
        onSubmit={({ name }) => {
          router.push('brewery-list');
        }}
      >
        {({ values, errors }) => (
          <Form>
            <InputWrapper>
              <Input name='name' />
            </InputWrapper>
            <CheckboxWrapper>
              <Checkbox name='isAdult' />
              <span>Are you older than 18 years old?</span>
            </CheckboxWrapper>
            <Button
              type={'submit'}
              label='Enter'
              disabled={!values.isAdult || values.name.length < 3}
              //   onClick={() => {}}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
