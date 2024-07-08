
"use client"
import { useHandleForm } from '@/shared/formHandler';
import InputField from '@/components/ui/InputField';
import { Button } from '@/components/ui/button';
import {
  ContactForm,
  ContactFormInitialValues,
  ContactFormSchema,
} from './ContactFormSchema';

import { Form } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';


const ContactUs = () => {
  const { control, handleSubmit, errors, form } = useHandleForm({
    initialValues: ContactFormInitialValues,
    schema: ContactFormSchema,
  });

  const onSubmit = (values: ContactForm) => {
    console.log(values);
  };

  return (
    <section className="w-full h-lvh fixed ">
      <div className="flex h-dvh  ">
        <div className="py-44 cardTheme  h-lvh w-[50%]">
          <div className="space-y-2 text-center mb-8">
            <h1 className="text-3xl font-bold">Contact Us!</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Share your Suggestions / Feedback.
            </p>
          </div>
          <div className="self-center w-[80%] mx-auto">
            <Form {...form}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className=" items-center space-y-6  mx-auto"
              >
                <InputField
                  name="username"
                  label="Name"
                  placeholder="Enter your name "
                  inputType="text"
                  formControl={control}
                  error={errors.username?.message}
                />
                <InputField
                  name="email"
                  label="Email"
                  placeholder="Enter your Email"
                  inputType="text"
                  formControl={control}
                  error={errors.email?.message}
                />

                <InputField
                  name="phoneNumber"
                  label="Phone Number"
                  placeholder="Enter your Phone Number"
                  inputType="phoneNumber"
                  formControl={control}
                  error={errors.phoneNumber?.message}
                />
                <Textarea />
                <Button variant="outline" className="w-full">
                  Submit
                </Button>
              </form>
            </Form>
          </div>
        </div>
        <div className="h-dvh  hidden lg:block">
          <img
            src="/Contact.jpg"
            alt="Loading"
            className="h-dvh inline-block object-cover"
            loading='lazy'
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

