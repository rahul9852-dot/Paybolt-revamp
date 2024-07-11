"use client"
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useHandleForm} from '@/shared/formHandler';
import InputField from '@/components/ui/InputField';
import { LoginForm , loginFormInitialValues, loginFormSchema} from './LoginSchema';

import { Form } from '@/components/ui/form';


const Login = () => {
  const [hasOtp, setHasOtp] = useState(false);

  const { control, handleSubmit, errors, form, setValue } = useHandleForm({
    initialValues: loginFormInitialValues,
    schema: loginFormSchema,
  });

  const onSubmit = (values: LoginForm) => {
    console.log(values);
    setHasOtp(true);
    setValue('hasOtp', true);
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center w-full ">
      <div className="flex flex-col items-center justify-center p-4 h-dvh pt-20">
        <div className="w-full lg:w-[80%] mx-auto py-10 bg-foreground/10 rounded-lg">
          <div className="space-y-2 text-center mb-8">
            <h1 className="text-3xl font-bold">Welcome Back!</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Please login to your account.
            </p>
          </div>
          <div className="self-center mx-auto">
            <Form {...form}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className=" items-center space-y-4 w-[70%] mx-auto"
              >
                <InputField
                  name="emailOrPhone"
                  label="Email/Phone Number"
                  placeholder="Enter your email or phone number"
                  inputType="text"
                  formControl={control}
                  error={errors.emailOrPhone?.message}
                />

                <InputField
                  name="password"
                  label="Password"
                  placeholder="Enter your password"
                  inputType="password"
                  formControl={control}
                  error={errors.password?.message}
                />
                <Button type="submit" className="w-full">
                  {hasOtp ? 'Login' : 'Proceed'}
                </Button>

                <Button variant="outline" className="w-full">
                  Login with Google
                </Button>
              </form>
            </Form>
          </div>

          <div className="text-center mt-5">
            <p className="text-gray-500 dark:text-gray-400">
              Are you a new user?{' '}
              <Link
                href="/signup"
                className="text-primary font-bold hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="h-full hidden lg:block">
        <img
          src="/Onboarding.jpg"
          alt="Signup-img"
          className="h-dvh inline-block object-cover"
        />
      </div>
    </section>
  );
};

export default Login;
