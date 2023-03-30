import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
function Bugview() {

    const [bugdata, setBugdata] = useState([])
    const par = useParams()
    const ids = par.bugid

    const getbug = async () => {
        const response = await fetch(`http://localhost:8080/getbug/${ids}`, {
            method: 'GET',
        })
        const data = await response.json();

        setBugdata(data);
    }
    useEffect(() => {
        getbug();
    }, []);


    const deletebug = async (ids) => {



        fetch(`http://localhost:8080/deletebug/${ids}`, {
            method: 'DELETE'
        })



        // window.location('/')
    }

    return (



        <div>
            <h1>{bugdata.title}</h1>
            <i className='fa-solid fa-trash-can' onClick={deletebug(ids)}></i>

        </div>
    )

}
export default Bugview