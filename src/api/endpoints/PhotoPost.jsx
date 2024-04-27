import React from "react";

export default function PhotoPost() {
  const [token, setToken] = React.useState('');
  const [nome, setNome] = React.useState('');
  const [peso, setPeso] = React.useState('');
  const [idade, setIdade] = React.useState('');
  const [img, setImg] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData()
    formData.append('img', img);
    formData.append('nome', nome);
    formData.append('peso', peso);
    formData.append('idade', idade);
    console.log(formData);

    fetch("https://dogsapi.origamid.dev/json/api/photo", {
      method: "POST",
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: formData,
    })
      .then((response) => {
        console.log(response);
        return response.json;
      })
      .then((json) => {
        console.log(json);
        return json;
      });
  }UserPost

  return (
    <form onSubmit={handleSubmit}>
    <input
      type="text"
      placeholder="Token"
      value={token}
      onChange={({ target }) => setToken(target.value)}
    />
    <input
      type="text"
      placeholder="Nome"
      value={nome}
      onChange={({ target }) => setNome(target.value)}
    />
    <input
      type="text"
      placeholder="Peso"
      value={peso}
      onChange={({ target }) => setPeso(target.value)}
    />
    <input
      type="text"
      placeholder="Idade"
      value={idade}
      onChange={({ target }) => setIdade(target.value)}
    />
    <input type="file" onChange={({ target }) => setImg(target.files[0])} />
    <button>Enviar</button>
  </form>
  );
};

