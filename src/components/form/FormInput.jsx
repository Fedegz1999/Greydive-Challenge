export const FormInput = ({title, placeholder, type, name, options, error, onChange}) => {
  

  return (
    <div className="mx-auto flex justify-center  ">
    <div className={`formInputBody ${error === name ? "border-red-500" : "border-gray-400"}`} data-aos="fade">
  
      <span className="formInputTitle">{title} <em className="text-red-500">*</em></span>
    
      <div className="flex ml-4 ">

          {options ? 
            <select 
            className={`formInput`}
            name={name}
            onChange={onChange}
            >
                <option value={""}></option>
          {options.map((item, index) => {       
            return (  
            <option key={index} value={item.value}>{item.label}</option>
          )
            
        })}
        </select> 
          : 
          <input
          type={type}
          className={`${type === "checkbox" ? `formInputCheckBox` : `formInput`}`}
          name={name}
          id={name}
          placeholder={placeholder}
          onChange={onChange}
          />}
          

        
      </div>
      {error === name? <h1 className='formInputError'>(!) Esta pregunta es obligatoria</h1> : null}
    </div>
    </div>
  );
}

