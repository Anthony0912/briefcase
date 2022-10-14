import { FormEvent, useState } from 'react'
import { LoadingButton } from '../../helpers/imports/material-ui.imports'
import HttpClient from '../../helpers/config-services/http-client.config'
import SendEmailService from '../../services/send-email.service'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import FormSendEmail from '../../interfaces/form-send-email.interface'
import ErrorSendEmail from '../../interfaces/error-send-email.interface'
import SendEmail from '../../interfaces/send-email.interface'
import ResponseSendGrid from '../../interfaces/response-send-grid.interface'

const ContactView = (): JSX.Element => {
  const [isLoadBtn, setIsLoadBtn] = useState<boolean>(false)
  const regExpEmail: RegExp = RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)
  const [form, setForm] = useState<FormSendEmail>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<ErrorSendEmail>({
    name: '',
    email: '',
    message: '',
  });

  const httpClient = new HttpClient();
  const sendEmailService = new SendEmailService(httpClient);
  
  const onSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setIsLoadBtn(true)
    const errors: ErrorSendEmail = formSendEmail(form)
    const result: boolean = validatorErrors(errors)
    if (!result) {
      const data: SendEmail = {
        to: form.email,
        from: 'akcardona0912@outlook.com',
        subject: `Mensaje enviado por ${form.name}, por el correo electrónico ${form.email} desde el formulario de contacto en el portafolio.`,
        text: form.message,
      }
      try {
        const response: ResponseSendGrid = await sendEmailService.sendEmail(data);
        const statusValid: number[] = [202, 200];
        if (statusValid.includes(response?.statusCode)) {
          toast.success('El correo electrónico fue enviado con éxito.');
          const formId: any = document.getElementById('form');
          formId.reset();
          setIsLoadBtn(false);
          setErrors({ name: '', email: '', message: '' });
        } else {
          toast.error('El correo electrónico no pudo ser enviado, por favor intentalo más tarde.');
          setIsLoadBtn(false);
        }
      } catch (error) {
        toast.error('El correo electrónico no pudo ser enviado, por favor intentalo más tarde.');
        setIsLoadBtn(false);
      }
    } else {
      setErrors(errors);
      setIsLoadBtn(false);
    }
  }

  const validatorErrors = (errors: any): boolean => {
    let isError: boolean = false;
    for (const key in errors) {
      if (errors[key] !== '') {
        isError = true;
        return isError;
      }
    }
    return false
  }

  const handleOnChange = (prop: keyof FormSendEmail) => (event: any): void => {
    setForm({ ...form, [prop]: event.target.value.trim() as string })
  }

  const formSendEmail = (form: FormSendEmail): any => {
    const errors: ErrorSendEmail = {
      name: '',
      email: '',
      message: '',
    }

    if (!form.name) {
      errors.name = 'Este campo es requerido. '
    }
    if (!form.email) {
      errors.email = 'Este campo es requerido.'
    } else if (!regExpEmail.test(form.email)) {
      errors.email = 'El formato del correo electrónico es invalido.'
    }
    if (!form.message) {
      errors.message = 'Este campo es requerido.'
    }
    return errors
  }

  return (
    <div className="contact section">
      <h2 className="section-title">Contact</h2>

      <div className="contact__container bd-grid">
        <form
          target="content"
          className="contact__form"
          id="form"
          onSubmit={onSubmit}
          noValidate
        >
          <input
            type="text"
            placeholder="Name"
            className="contact__input"
            id="name"
            name="name"
            onChange={handleOnChange('name')}
          />
          <span id="name-alert">{errors.name}</span>
          <input
            type="mail"
            placeholder="Email"
            className="contact__input"
            id="email"
            name="email"
            onChange={handleOnChange('email')}
          />
          <span id="email-alert">{errors.email}</span>
          <textarea
            name="message"
            id="message"
            cols={0}
            rows={10}
            className="contact__input"
            placeholder="Leave your comment"
            onChange={handleOnChange('message')}
          ></textarea>
          <span id="comment-alert">{errors.message}</span>

          <LoadingButton
            className="contact__button button"
            loading={isLoadBtn}
            fullWidth
            type="submit"
          >
            Send Email
          </LoadingButton>
        </form>
      </div>
    </div>
  )
}

export default ContactView
