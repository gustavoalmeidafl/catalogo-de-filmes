import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Button } from 'primereact/button';
import "tailwindcss";
import './login.css';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { context } from '../constexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {

        const {register, handleSubmit} = useForm();

        const { setlogado} = useContext(context);
        const  navigate = useNavigate()
        
      function logar(dados){
        if(dados.email === "a@gmail.com" && dados.senha === '1234'){
            setlogado(true);
            navigate('/home');
        }


      }

        const [visivilidadeSenha, setMostrarseha] = useState(false);

    return (  
        <>
            <div className='h-screen flex align-items-center justify-content-center'>
                <form onSubmit={handleSubmit(logar)} id='card'className='col-12 md:col-3 mx-3 p-3'>
                    
                    <h1 className='text-center  text-4x1'>Login</h1>
                    
                    <label htmlFor="email" className='block uppercase font-bold text-sm mb-1'></label>
                   <InputText id='email' type='email' placeholder='E-mail' className='mb-3 w-full' {...register('email', {required:true})}/>
                
                    <label htmlFor="senha" className='block uppercase font-bold text-sm mb-1'></label>
                    <div className='mb-3' >
                    <IconField>
                        <InputIcon className={`pi ${visivilidadeSenha ? 'pi-eye' : 'pi-eye-slash'} cursor-pointer`}
                        onClick={() => setMostrarseha (!visivilidadeSenha)}> </InputIcon>
                        <InputText id='senha' placeholder='Senha' className='w-full' {...register('senha', {required:true})} type={ visivilidadeSenha ? 'text' : 'password'}/>
                    </IconField>
                    </div>
                    <Button label="Entrar" type='submit' className='w-full'/>
                    <p id='entrarConta'>Não possui uma conta? <a href="/">Cadastre-se</a></p>

                </form>
         </div>
        </>
    );
}
 
export default Login;