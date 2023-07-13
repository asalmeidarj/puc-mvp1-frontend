import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchForm() {

    const [query, setquery] = useState('')
    const navigate = useNavigate();

     function handleSubmit(e: any){
        e.preventDefault()
        navigate('/products?q=' + query)
     }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setquery(e.target.value)} placeholder='Pesquise um produto'/>
        <input type='submit' value='Buscar'/>
    </form>
  )
}
