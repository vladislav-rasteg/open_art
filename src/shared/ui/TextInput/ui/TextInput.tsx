import React, { type InputHTMLAttributes, forwardRef } from 'react'
import s from './TextInput.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'


interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  fullWidth?: boolean
  disabled?: boolean
  error?: string
}

// export const TextInput: FC<TextInputProps> = (props) => {
//   const { className, disabled = false, size = "default", fullWidth = false, ...otherProps } = props

//   return (
//       <input
//         className={classNames(s.input, { [s.disabled]: disabled, [s.fullWidth]: fullWidth }, [className as string, s[size]])}
//         {...otherProps}
//       />
//   )
// }

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  function TextInput(props, ref){
    const { className, disabled = false, error = '', size = "default", fullWidth = false, ...otherProps } = props
    return (
        <div className={s.input_error_wrapper}>
          <input
            ref={ref}
            className={classNames(s.input, { [s.disabled]: disabled, [s.fullWidth]: fullWidth, [s.error]: error }, [className as string, s[size]])}
            {...otherProps}
          />
          {error && <p className={s.error}>{error}</p>}
        </div>
    )
  }
) 
