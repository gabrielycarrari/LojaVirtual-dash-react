import { useNavigate, useParams } from 'react-router-dom'; 
import ProductForm from './ProductForm';
import { useState } from 'react';
import FormButtons from './FormButtons';
import api from "./axiosApi";
import { useEffect } from 'react';
import handleChange from './handleChange';
import Loading from './Loading';
 
const EditProduct = () => { 
    const [inputs, setInputs] = useState({}); 
    const [errors, setErrors] = useState({}); 
    const [modal, setModal] = useState(undefined); 
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate(); 
 
    const idProduto = useParams().id; 
    if (!idProduto) { 
        navigate("/products"); 
    } 

    function loadProductById(id) {
        setLoading(true);
        api.get(`/obter_produto/${id}`)
            .then(response => {
                setInputs(response.data);
            })
            .catch(error => {
                console.error('Erro ao carregar produto: ', error);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    function handleSubmit(event) {
        event.preventDefault();
        api.post("/alterar_produto", inputs)
            .then((response) => {
                if (response.status === 204) {
                    navigate("/products");
                } else {
                    console.log(response);
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    function localhandleChange(event) {
        handleChange(event, inputs, setInputs)
    }

    useEffect(() => {
        setInputs({...inputs, id: idProduto});
        loadProductById(idProduto);
    }, [idProduto]);
    
    return ( 
        <>
            <div className="d-flex justify-content-between align-items-center">
                <h1>Alteração de Produto</h1>
            </div>
            <form onSubmit={handleSubmit} noValidate autoComplete='off'>
                <ProductForm handleChange={localhandleChange} inputs={inputs} errors={errors} isNew={false} />
                <FormButtons cancelTarget="/products" />
            </form>
            {loading && <Loading />}
        </>
    ); 
} 
 
export default EditProduct;