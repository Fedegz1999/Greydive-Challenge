export const FormButtom = ({label, onClick, type}) => {
    return (
        <>
        <div className="flex justify-center">
        <button onClick={onClick} type={type} className="formButton">
            {label}
        </button>
        </div>
        
        </>
    )
}