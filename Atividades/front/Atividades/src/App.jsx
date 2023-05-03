import Aluno from "./components/Aluno"


function App() {


  return (
    <div>
      <Aluno>
        {
          [{ nome: "jon", email: "jon@gmail.com", curso: "spi", media: 7 },
          { nome: "jon1", email: "jon1@gmail.com", curso: "spi", media: 1 },
          { nome: "jon2", email: "jon2@gmail.com", curso: "spi", media: 6.1 }].map((aluno, i) =>
            <>
              <p>nome: {aluno.nome}</p>
              <p>email: {aluno.email}</p>
              <p>curso: {aluno.curso}</p>
              <p>media: {aluno.media}</p>
              <p>status: {aluno.media >= 7 ? "aprovado" : "reprovado"}</p>
            </>)
        }
      </Aluno>
    </div>
  )
}

export default App
