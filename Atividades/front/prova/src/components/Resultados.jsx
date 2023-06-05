
import { useEffect, useState } from 'react';

import styles from "./Resultados.module.css"

const url = "http://localhost:3000/resultados";

const Resultados = () => {

    const [resultados, setResultados] = useState([])

    useEffect(() => {
        async function fetchData() {

            const response = await fetch(url)
            const data = await response.json()

            setResultados(data)

        }

        fetchData()
    }, [])

    function voltarInicio() {
      window.location.href = '/';
    }

    return (
      <div className={styles.container}>
        <div className={styles.container1}>
            <h1>GABARITO</h1>
            <table className={styles.localTexto}>
                <thead>
                    <tr>
                        <th>Questão 1:</th>
                        <th>Questão 2:</th>
                        <th>Questão 3:</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        resultados.map((resultado) => (
                            <tr key={resultado.id}>
                                <td className={styles.espaco}>{resultado.q1}</td>
                                <td className={styles.espaco}>{resultado.q2}</td>
                                <td className={styles.espaco}>{resultado.q3}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <button className={styles.localBotao} onClick={voltarInicio}>Voltar ao Inicio</button>
        </div>
      </div>
    )
}

export default Resultados