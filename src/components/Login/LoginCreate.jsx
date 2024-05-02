import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import { USER_POST } from "../../api";

export default function LoginCreate() {
    const username = useForm();
    const email = useForm('email');
    const password = useForm();


    async function handleSubmit(event) {
        event.preventDefault();
        const { url, options } = USER_POST({
            username: username.value,
            email: email.value,
            password: password.value
        })
        const response = await fetch(url, options);
        console.log(response);
    }

    return (
        <section className="animeLeft">
            <h1 className="title">Cadastre-se</h1>
            <form onSubmit={handleSubmit}>
                <Input label="Usuário" type="text" name="username" {...username} />
                <Input label="E-mail" type="text" name="email" {...email} />
                <Input label="Senha" type="text" name="password" {...password} />
                <Button>Cadastrar</Button>
            </form>
        </section>
    )
}