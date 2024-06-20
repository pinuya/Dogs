import React from "react";
import Input from "../Forms/Input"
import Button from "../Forms/Button"
import useForm from "../../Hooks/useForm"
import { PASSWORD_LOST } from "../../api";

export default function LoginPasswordLost() {
    const login = useForm();
    const { data, loading, error, request } = useFetch();

    function handleSubmit(event) {
        event.preventDefault();
        const { url, options } = PASSWORD_LOST({ login: login.value, url: "http://localhost:5173/login/login/lost" })

        request(url, options)
    }

    return (
        <section>
            <h1 className="title">Perdeu a senha?</h1>
            <form onSubmit={handleSubmit}>
                <Input label="Email / Usuario" type="text" name="login" {...login} />
                <Button>Enviar E-mail</Button>
            </form>

        </section>
    )
}