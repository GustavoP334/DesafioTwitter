import React from "react";
import classNames from 'classnames';

import './index.css'

const Input = React.forwardRef(({ type, placeholder, onChange, isValid, ...rest }, ref) => {
    const inputClass = classNames('mt-1 px-3 py-2 bg-white border shadow-sm placeholder-slate-400 rounded focus:outline-none block w-full rounded-md sm:text-sm focus:ring-1', {
        'border-2 border-rose-500': !isValid,
        'focus:border-rose-500 focus:ring-red-500': !isValid,
        'border-2 border-sky-500': isValid,
        'focus:border-sky-500 focus:ring-sky-500': isValid
    });
    console.log(isValid);

    return <input ref={ref} type={type} className={inputClass} placeholder={placeholder} onChange={onChange} {...rest} />;
});

export default Input;