import { useEffect } from 'react'
import {getFirestore, collection,  getDocs} from 'firebase/firestore'
import { useState } from 'react'
import { app } from "../firebase/firebaseConfig";
import { RespCard } from './resp/RespCard';

const db = getFirestore(app)
export const Respuestas = () => {

const [resp, setResp] = useState([])


useEffect(()=>{
const getList = async () =>{
    try {
        const consultDb = await getDocs(collection(db, 'usuarios'))
        const docs = []
        consultDb.forEach((doc) => {
            docs.push({...doc.data(),id: doc.id})
        })
        setResp(docs)
    } catch (err) {
        console.log(err)
    }
}
getList()
},[resp.length])

    return (
        <div className='h-screen bg-slate-200'>
        <div className='flex-col flex w-full m-auto bg-slate-200 items-center  justify-center'>
      {resp.length ? 
      resp.map((item, index) => {
        return (
            <div key={index}>
        <RespCard
        nombreCompleto={item.full_name}
        email={item.email}
        pais={item.country_of_origin}
        fechaN={item.birth_date}
        tYc={item.terms_and_conditions}
        id={item.id}
        />
        </div>
        )})
      :<h1 className='font-bold text-green-800 text-2xl text-center flex justify-center '>Cargando...</h1>}
      </div>
        </div>
    )
}