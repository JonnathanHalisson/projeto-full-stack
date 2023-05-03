import {useState} from 'react'

const HookSorteador = () => {
    const[numero, setNumero] = useState()

    const[numerosSorteados, setNumeroSorteado] = useState([])

    function mega(){
      if(numerosSorteados.length < 6){
        let sorteado = Math.floor(Math.random() * 60) + 1;
        setNumero(sorteado)
        setNumeroSorteado([...numerosSorteados, sorteado])
      } else {
        alert("já temos os números sorteador!")
      }
    }

  return (
    <div>
        <h1>Sorteador da Mega</h1>
        <button onClick={mega}>Clique gerar um número</button>
        <h1>Último número sorteado: {numero}</h1>
        <h1>sorteados: {numerosSorteados.join(" - ")}</h1>
    </div>
  )
}

export default HookSorteador