export const RespCard = ({fechaN, pais, email, nombreCompleto,id, tYc}) => {

    return (
        <>
<div className="RespContainerCard">

<h1 className="bg-green-200 rounded-md text-center mb-2"><em>Encuesta de: <strong>{nombreCompleto}</strong></em></h1>

<div className="p-2 font-mono">

<label className="text-xl font-semibold">Nombre completo:</label>
<p>{nombreCompleto}</p>

<label className="text-xl font-semibold">Email:</label>
<p>{email}</p>

<label className="text-xl font-semibold">País:</label>
<p>{pais}</p>

<label className="text-xl font-semibold">Fecha de nacimiento:</label>
<p>{fechaN}</p>


<label className="text-xl font-semibold">Terminos y condiciones:</label>
<p className="text-green-800 font-semibold">{tYc === "on" ? "Aceptados" : null}</p>

<br></br>
<p className="text-gray-700 text-sm font-semibold"><em>ID:</em> {id}</p>
</div>


</div>
        </>
    )
}

