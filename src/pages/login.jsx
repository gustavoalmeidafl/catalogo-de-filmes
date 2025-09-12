import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Button } from 'primereact/button';
import "tailwindcss";
import './login.css';
import { useState } from 'react';

const Login = () => {
     
        const [visivilidadeSenha, setMostrarseha] = useState(false);

    return (  
        <>
            <div className='h-screen flex align-items-center justify-content-center'>
                <form id='card'className='col-12 md:col-3 mx-3 p-3'>
                    <h1 className='text-center' d='logocard'>Virgin D</h1>
                    <h3 className='text-center  text-4x1'>Entre na sua conta</h3>
                    
                    <label htmlFor="email" className='block uppercase font-bold text-sm mb-1'>E-mail</label>
                   <InputText id='email' type='email' placeholder='Insira seu email' className='mb-3 w-full'/>
                
                    <label htmlFor="senha" className='block uppercase font-bold text-sm mb-1'>Senha</label>
                    <div className='mb-3'>
                    <IconField>
                        <InputIcon className={`pi ${visivilidadeSenha ? 'pi-eye' : 'pi-eye-slash'} cursor-pointer`}
                        onClick={() => setMostrarseha (!visivilidadeSenha)}> </InputIcon>
                        <InputText id='senha' placeholder='Insira sua senha' className='w-full' type={ visivilidadeSenha ? 'text' : 'password'}/>
                    </IconField>
                    </div>
                    <Button label="Submit" type='submit' className='w-full'/>
                    <p id='entrarConta'>Não possui uma conta? <a href="/">Cadastre-se</a></p>

                </form>
         </div>
        </>
    );
}
 
export default Login;