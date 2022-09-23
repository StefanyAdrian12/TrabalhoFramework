export const Lista = ({_id, nome, descricao, usuario, data_inclusao ,palavras_chave}) => {
  return (
          <div key={_id}>
              <h1> Nome: {nome} </h1>
              <p> Descrição: {descricao}</p>
                  <p> Usuário: {usuario} </p>
                  <p> Data de Inclusão: {data_inclusao}</p>
                  <p> Palavras-Chave {palavras_chave} </p>
          </div>
          )
}