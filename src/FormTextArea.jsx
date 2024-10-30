const FormTextArea = ({ field, onChange, label, value, error, autofocus = false}) => {
    return (
        <>
            <div className="form-floating">
                <textarea  className={`form-control ${error ? 'is-invalid' : 'is-valid'}`} placeholder=" " id={field} name={field} onChange={onChange} autoFocus={autofocus} style="height:3rem">{value || ""}</textarea> 
                <label for={field}>{label}</label>
            </div>
            {error && <div className="invalid-feedback">{error}</div>}
        </>
    );
}
export default FormTextArea;