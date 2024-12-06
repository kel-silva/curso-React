import React, { useState } from 'react';

export default  function App() {
  const [form, setForm] = useState({"nome":"kel","curso":"react","ano":"2021"});
        const handlFormChange=(e)=>{

            if (e.target.getAttribute('name')=='fnome'){
                setForm({"nome":e.target.value,"curso":form.curso,"ano":form.ano})
            
            }else if(e.target.getAttribute('name')=='fcurso'){
                setForm({"nome":form.nome,"curso":e.target.value,"ano":form.ano})
            
            
            }else if(e.target.getAttribute('name')=='fano'){
                setForm({"nome":form.nome,"curso":form.curso,"ano":e.target.value})
            


            }

        }

  return (
    <>
    
       <label>nome:</label>
       <input type='text' name ='fnome' value={form.nome} onChange={(e)=>handlFormChange(e)} /><br/>
       
       <label>curso:</label>
       <input type='text' name ='fcurso' value={form.curso} onChange={(e)=>handlFormChange(e)}  /><br/>
       
       <label>ano:</label>
       <input type='text' name ='fano' value={form.ano} onChange={(e)=>handlFormChange(e)}  /><br/>

      <p>Nome digitado: {form.nome}</p>
      <p>curso digitado: {form.curso}</p>
      <p>Ano digitado: {form.ano}</p>
</>    
  );
}
