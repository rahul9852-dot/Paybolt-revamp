"use client"
import { Control, FieldPath } from 'react-hook-form';
import { z } from 'zod';
import { signUpFormSchema } from '@/schema/signUpForm';
import { loginFormSchema } from '@/schema/loginSchema';
import { AnyType } from '@/shared/formHandler';
import { 
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from './form';
import { Input } from './Input';
import { Label } from './label';
import { cn } from "../../lib/utils";
interface SignupFormFieldProps {
  name: FieldPath<z.infer<typeof signUpFormSchema | typeof loginFormSchema>>;
  label: string;
  placeholder: string;
  description?: string;
  inputType?: string;
  formControl: Control<AnyType>;
  error?: string;
}

const InputField = ({
  name,
  label,
  placeholder,
  description,
  inputType,
  formControl,
}: SignupFormFieldProps) => {
  return (
    <FormField
      control={formControl}
      name={name}
      render={({ field }) => (
        <FormItem>
          {/* <Label
            className={cn(
              'absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] text-foreground px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto border border-foreground',
              {
                'outline-destructive': !!formControl.getFieldState(field.name)
                  .error,
              },
            )}
          >
            {label}
          </Label> */}
          <FormControl>
            <Input
              placeholder={placeholder}
              type={inputType || 'text'}
              {...field}
              className={cn('px-2 border-none', {
                'outline-destructive': !!formControl.getFieldState(field.name)
                  .error,
              })}
            />
          </FormControl>
          {description && (
            <FormDescription className="flex justify-start text-red ">
              {description}
            </FormDescription>
          )}
          <FormMessage className="text-xs text-red-600 dark:text-red-400 flex justify-start" />
        </FormItem>
      )}
    />
  );
};

export default InputField;
