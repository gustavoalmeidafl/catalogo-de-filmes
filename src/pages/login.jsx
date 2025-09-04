import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Button } from 'primereact/button';
import "tailwindcss";
import './login.css';

const Login = () => {
    return (  
        <>
            <div className='h-screen flex align-items-center justify-content-center'>
                <form id='card'className='p-3'>
                    <h3 className='text-center  text-4x1'>Entre na sua conta</h3>
                    <label htmlFor="email" className='block uppercase font-bold text-sm mb-1'>E-mail</label>
                   <InputText id='email' type='email' placeholder='Insira seu email' className='mb-3 w-full'/>
                
                    <label htmlFor="senha" className='block uppercase font-bold text-sm mb-1'>Senha</label>
                    <div className='mb-3'>
                    <IconField>
                        <InputIcon className="pi pi-eye"> </InputIcon>
                        <InputText id='senha' placeholder='Insira sua senha' className='w-full'/>
                    </IconField>
                    </div>
                    <Button label="Submit" type='submit' className='w-full'/>

                </form>
         </div>
        </>
    );
}
 
export default Login;