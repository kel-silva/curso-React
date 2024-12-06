import react,{useState} from 'react'
export default function App(){

   const [nome,setNome]=useState();
     const armazenar=(chave,valor)=>{

        localStorage.setItem(chave,valor)
     }

     const consultar=(chave)=>{
        alert (localStorage.getItem(chave))
     }
     const apagar=(chave)=>{

        localStorage.removeItem(chave)
     }
return(
<>
<label>Digite seu nome</label><br/>
<input type='text' value={nome} onChange={(e)=>setNome(e.target.value)}/><br/>
<button onClick={()=>armazenar('ls_nome', nome)}>gravar nome</button>
<button onClick={()=>consultar('ls_nome')}>ver nome</button>
<button onClick={()=>apagar('ls_nome')}>remover nome</button>

</>
)
}