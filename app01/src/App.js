import React,{useState} from 'react'
import Globais from './componentes/Globais'
import Info from './componentes/Info'

export default function App(){


const [resumo,setResumo]=useState(Globais.resumo)

const gravarResmo=()=>{

    Globais.resumo=resumo
}
const verResumo=()=>{
    alert(Globais.resumo)
}

return(
<>
<hr/>
<Info/> 
<p>{'canal + ' + Globais.canal}</p>
<p>{'cursos + ' + Globais.curso}</p>
<p>{'Ano + ' + Globais.ano}</p>
<hr/>

<input type='text' value={resumo} onChange={(e)=>setResumo(e.target.value)} /> 
<button onClick={()=>gravarResmo()}>Gravar Resumo</button>
<button onClick={()=>verResumo()}>ver Resumo</button>



</>

)
}