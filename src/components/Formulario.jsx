import { FormPresentation } from "./form/FormPresentation";
import { FormInput } from "./form/FormInput";
import data from './data/data'
import { FormButtom } from "./form/FormButtom";
import { useState } from "react";
import {
getFirestore, collection, addDoc} from 'firebase/firestore'
import { app } from "../firebase/firebaseConfig";
import { Link } from "react-router-dom";

const db = getFirestore(app)

export const Formulario = () => {


    const initialValues = {
        full_name: "",
        email: "",
        birth_date: "",
        country_of_origin:"",
        terms_and_conditions: ""
      };

    const [formData, setFormData] = useState(initialValues);
    const [error, setError] = useState("");
    const [verResp, setVerResp] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

      console.log(verResp)

      const Completed = async() => {
        if(!formData.full_name.length)return setError("full_name")
        if(!formData.email.length)return setError("email")
        if(!formData.birth_date.length)return setError("birth_date")
        if(!formData.country_of_origin.length)return setError("country_of_origin")
        if(!formData.terms_and_conditions.length)return setError("terms_and_conditions")
        try {
            await addDoc(collection(db, 'usuarios'),{
                ...formData
            })
            setVerResp(true)
        } catch (err) {
            console.log(err)
        }
        setFormData({...initialValues})
    }




    return (
        <div className="bg-green-200">
    {verResp ? 
    <>
<div className="bg-green-200 h-screen">
<div className="mx-auto w-[23rem] py-3 md:w-[35rem] ">

<FormPresentation>
<h1 className="text-bold ml-3 text-3xl mb-3">Greydive Challenge </h1>
    <h1 className="text-sm ml-3 mb-5">Se registró tu respuesta.</h1>

    <Link to={'respuestas'}>
<button className="formButtonResp">Ver las respuestas</button> 
</Link>

</FormPresentation>

</div>
</div>
</>

:

        
        <div className="mx-auto w-[23rem] py-3 md:w-[35rem] ">

        <FormPresentation>
<h1 className="text-bold text-3xl mb-3">Greydive Challenge </h1>
<h1 className="mb-2">En este Challenge realicé un formulario con estilo similar a Google form en el cual al completarlo
    y presionar "enviar", se abre una nueva vista con otro botón donde al darle click 
    se pueden ver las respuestas de las distintas personas que
    completaron el formulario.
</h1>
<h1>Esta web es responsiva y las respuestas se guardan en una base de datos de Firebase.</h1>

    </FormPresentation>

    <>
{data.items.map((item, index) => {
    return (    
        <div key={index}>
{item.type !== "submit" ? 

    <FormInput   
    title={item.label}
    placeholder={"Tu respuesta"}
    type={item.type}
    name={item.name}
    onChange={handleInputChange}
    options={item.options ? item.options : null}
    error={error}
    />       
    :
    <FormButtom
    label={item.label}
    type={item.type}
    onClick={Completed}
    />


}</div>
)})}
</>

        </div>  
}
</div>

    )
}