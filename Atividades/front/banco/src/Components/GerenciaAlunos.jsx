import { useEffect, useState } from 'react';
import styles from './GerenciaAlunos.module.css';

const url = "http://localhost:3000/alunos";

const GerenciaAlunos = () => {

    const [alunos, setAlunos] = useState([])

    useEffect(() => {
        async function fetchData() {

            const response = await fetch(url)
            const data = await response.json()

            setAlunos(data)

        }

        fetchData()
    }, [])

    return (
        <div>
            <h1>Lista de Alunos:</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nome:</th>
                        <th>Questão 1:</th>
                        <th>Questão 2:</th>
                        <th>Questão 3:</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        alunos.map((aluno) => (
                            <tr key={aluno.id}>
                                <td>{aluno.nome}</td>
                                <td className={styles.espaco}>{aluno.q1}</td>
                                <td className={styles.espaco}>{aluno.q2}</td>
                                <td className={styles.espaco}>{aluno.q3}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default GerenciaAlunos