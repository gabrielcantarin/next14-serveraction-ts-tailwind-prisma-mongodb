"use client";
import { ComponentProps } from "react";

import { useFormStatus } from 'react-dom';

type FormSubmitButtonProps = {
    children: React.ReactNode,
    className?: string,


} & ComponentProps<"button">;

export default function ButtonFormSubmit(
    {
        children,
        className,
        ...props
    }: FormSubmitButtonProps
) {

    const { pending } = useFormStatus();

    return (
        <>
            <button
                {...props}
                className={`btn btn-primary ${className}`}
                type="submit"
                disabled={pending}
            >
                {pending && <i className="loading loading-spinner"></i>}
                {children}
            </button>
        </>
    );
}