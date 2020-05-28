import React, {useState, useRef} from 'react'

export default function List() {
    const [list, setList] = useState([{name: 'Jan', surname: 'Kowalski', id: '5875875'}]);
    const inputName = useRef(null);
    const inputSurname = useRef(null);
    let [isCorrect, setValidation] = useState(true);
    const removeItem = (id) => {
        const newState = [...list].filter(( obj ) => {
            return obj.id !== id;
          });
          setList([...newState])
    }
    const add = () => {

        if(inputName.current.value.trim() && inputSurname.current.value.trim()) {
            setValidation(true);
            setList([...list, {name: inputName.current.value, surname: inputSurname.current.value, id: Math.random() }])
        }
        else {
            setValidation(false);

        }




    }


    return (
        <div>
            Pracownicy
            <form>
                <input name="Name" ref={inputName} placeholder='Name' ></input>
                <input name="Surname" ref={inputSurname}  placeholder='Surname'></input>
                <button type="button" onClick={add} disabled={list.length >= 5 ? true : false}>Add</button>

<ul id='list'>
               {list.map(item=> 
               <li key={item.id}><span>{item.name}</span> <span>{item.surname}</span>
               <button className='remove' onClick={()=> {removeItem(item.id)} } >Delete</button></li> )} 
               </ul>
               <p className='error'>
                     {isCorrect ? '' : 'Please fill input fields correctly.'}
                 </p>
            </form>

        </div>
    )
}
