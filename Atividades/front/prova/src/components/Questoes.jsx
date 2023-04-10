import React, { useState } from 'react'
import styles from "./Questoes.module.css"


const Questoes = () => {

    const respostasCertas = ['C', 'A', 'B']

    const [mostrarQ2, setMostrarQ2] = useState(false)

    const [mostrarQ3, setMostrarQ3] = useState(false)

    const [esconderBotao, setEsconderBotao] = useState(true)

    const [mostrarTudo, setmostrarTudo] = useState(false)

    const [q1, setQ1] = useState(null)
    const [q1Final, setQ1Final] = useState(null)

    const [q2, setQ2] = useState(null)
    const [q2Final, setQ2Final] = useState(null)

    const [q3, setQ3] = useState(null)
    const [q3Final, setQ3Final] = useState(null)

    const [qRespondidas, setQRespondidas] = useState([])


    function escolherQ1(evento) {
        setQ1(evento.target.value)
    }

    function finalizarQ1() {

        if (q1 === null) {
            alert("Você precisa escolher uma alternativa.")
        } else if (q1Final === null) {
            setQ1Final(q1)
            setQRespondidas([...qRespondidas, q1])
            setMostrarQ2(true)
        } else {
            alert("Você já escolheu uma alternativa :(")
        }
    }

    function escolherQ2(evento) {
        setQ2(evento.target.value)
    }

    function finalizarQ2() {

        if (q2 === null) {
            alert("Você precisa escolher uma alternativa.")
        } else if (q2Final === null) {
            setQ2Final(q2)
            setQRespondidas([...qRespondidas, q2])
            setMostrarQ3(true)
        } else {
            alert("Você já escolheu uma alternativa :(")
        }
    }

    function escolherQ3(evento) {
        setQ3(evento.target.value)
    }

    function finalizarQ3() {

        if (q3 === null) {
            alert("Você precisa escolher uma alternativa.")
        } else if (q3Final === null) {
            setQ3Final(q3)
            setQRespondidas([...qRespondidas, q3])
        } else {
            alert("Você já escolheu uma alternativa :(")
        }
    }

    function finalizar() {
        let acertos = 0

        if (q1Final != null && q2Final != null && q3Final != null) {

            for (let i in qRespondidas) {
                if (qRespondidas[i] === respostasCertas[i]) {
                    acertos++
                }
            }
            alert('Você acertou ' + acertos + '/3.')
            window.location.reload()
        } else {
            alert('Você precisa resposder todas as questões!')
        }
    }

    function escondeOBotao() {
        setmostrarTudo(true)
        setEsconderBotao(false)
    }

    return (

        <div className={styles.container}>

            {esconderBotao && <div className={styles.localBotao}><button className={styles.botaoInicial} onClick={escondeOBotao}>Iniciar Quiz</button></div>}

            {mostrarTudo && <div className={styles.questionario}>
                <div>
                    <h3>Questão 1: O que é React?</h3>
                    <label> a) Uma linguagem de programação <input type="radio" name="q1" value="A" onClick={escolherQ1} /></label><br />
                    <label> b) Um banco de dados <input type="radio" name="q1" value="B" onClick={escolherQ1} /></label><br />
                    <label> c) Uma biblioteca de JavaScript <input type="radio" name="q1" value="C" onClick={escolherQ1} /></label><br />
                    <label> d) Um servidor web <input type="radio" name="q1" value="D" onClick={escolherQ1} /></label>
                    <button className={styles.botaoBonito2} onClick={finalizarQ1}>Escolher</button>
                </div>
                {mostrarQ2 &&
                    <div>
                        <h3>Questão 2: Qual é o propósito do JSX no React?</h3>
                        <label> a) Renderizar componentes React <input type="radio" name="q2" value="A" onClick={escolherQ2} /></label><br />
                        <label> b) Controlar a lógica de negócios <input type="radio" name="q2" value="B" onClick={escolherQ2} /></label><br />
                        <label> c) Definir estilos de página <input type="radio" name="q2" value="C" onClick={escolherQ2} /></label><br />
                        <label> d) Definir rotas da aplicação <input type="radio" name="q2" value="D" onClick={escolherQ2} /></label>
                        <button className={styles.botaoBonito2} onClick={finalizarQ2}>Escolher</button>
                    </div>
                }
                {mostrarQ3 &&
                    <div>
                        <h3>Questão 3: Qual é a finalidade do hook useState() no React?</h3>
                        <label> a) Definir estilos de página <input type="radio" name="q3" value="A" onClick={escolherQ3} /></label><br />
                        <label> b) Controlar a lógica de negócios <input type="radio" name="q3" value="B" onClick={escolherQ3} /></label><br />
                        <label> c) Gerenciar o estado de um componente funcional <input type="radio" name="q3" value="C" onClick={escolherQ3} /></label><br />
                        <label > d) Definir rotas da aplicação <input type="radio" name="q3" value="D" onClick={escolherQ3} /></label>
                        <button className={styles.botaoBonito2} onClick={finalizarQ3}>Escolher</button>
                    </div>
                }
            </div>}

            {mostrarTudo && <div className={styles.respostas}>
                <h3 style={{ textAlign: 'center' }}>Questões respondidas:</h3>

                {qRespondidas.map((item, i) => (
                    <p key={i} className={styles.textoLegal}>Na questão {i + 1} você escolheu a alternativa: <b>{item}</b></p>
                ))}
                
            </div>}

            {mostrarTudo && <div className={styles.final}>
                <button className={styles.botaoBonito} onClick={finalizar}>Finalizar</button>
            </div>}
        </div>

    )
}

export default Questoes