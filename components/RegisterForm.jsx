"use client";

import { useActionState, useFormStatus } from "react";
import { register } from "../actions/userController";

export default function RegisterForm() {
    const [formState, formAction] = useActionState(register, {});

    console.log(formState);

    return (
        <form action={formAction} className="max-w-xs mx-auto">
            <div className="mb-3">
                <input
                    name="username"
                    autoComplete="off"
                    type="text"
                    placeholder="Username"
                    className="input input-bordered w-full max-w-xs"
                />
            </div>
            <div className="mb-3">
                <input
                    name="password"
                    autoComplete="off"
                    type="password"
                    placeholder="Password"
                    className="input input-bordered w-full max-w-xs"
                />
            </div>
            <button className="btn btn-secondary">Create Account</button>
        </form>
    );
}
