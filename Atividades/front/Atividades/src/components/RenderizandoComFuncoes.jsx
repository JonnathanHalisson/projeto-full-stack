import React from 'react'

const RenderizandoComFuncoes = () => {

    function escolhaDrenderizacao(oQueRenderizar){
        if (oQueRenderizar === "h1") {
            return <h1>Texto em h1</h1>
        } else {
            return <h2>Texto em h2</h2>
        }
    }

  return (
    <div>
        {escolhaDrenderizacao("h1")}
        {escolhaDrenderizacao("h2")}
    </div>
  )
}

export default RenderizandoComFuncoes