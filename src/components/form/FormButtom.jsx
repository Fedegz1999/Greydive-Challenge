export const FormButtom = ({label, onClick, type}) => {
    return (
        <>
        <div className="flex justify-start">
        <button onClick={onClick} type={type} className="formButton">
            {label}
        </button>
        </div>
        
        </>
    )
}