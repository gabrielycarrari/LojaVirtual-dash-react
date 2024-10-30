import FormInput from "./FormInput";

const ProductForm = ({ handleChange, inputs, errors, isNew }) => {
    return (
        <>
            <div className="row">
                <div className="col-12 mb-3">
                    <FormInput type="text" field="nome" label="Nome" value={inputs.nome} error={errors?.name} onChange={handleChange} autofocus={true} />
                </div>
       
                <div className="col-12 mb-3">
                    <FormInput type="text" field="preco" label="Preco" value={inputs.preco} error={errors?.preco} onChange={handleChange} />
                </div>
            
                <div className="col-12 mb-3">
                    <FormInput type="text" field="descricao" label="Descricao" value={inputs.descricao} error={errors?.descricao} onChange={handleChange} />
                </div>
           
                <div className="col-12 mb-3">
                    <FormInput type="text" field="estoque" label="Estoque" value={inputs.estoque} error={errors?.estoque} onChange={handleChange} />
                </div>
            </div>
        </>
    );
}

export default ProductForm;