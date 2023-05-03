import React from 'react'
import styles from './Exercicio3.module.css'

const Exercicio3 = (props) => {
    const defineMensagem = (mes) => {
        if (mes === "setembro") {
            return "prevenção ao suicídio"
        } else if (mes === 'outubro') {
            return "concientização do câncer de mama"
        } else {
            return "prevenção e combate ao câncer de próstata"
        }
    }

    const defineCordeFundo = (mes) => {
        if (mes === "setembro") {
            return styles.setembroClass
        } else if (mes === 'outubro') {
            return styles.outubroClass
        } else {
            return styles.novembroClass
        }
    }

    return (
        <div className={defineCordeFundo(props.mes)}>
            <p>defineMensagem</p>
        </div>
    )
}

export default Exercicio3