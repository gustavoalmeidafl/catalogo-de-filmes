import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Button } from 'primereact/button';
        

const Login = () => {
    return (  
        <>
            <div class='bg-primary'>
                <form>
                    <h3>Entre na sua conta</h3>
                    <label htmlFor="email">E-mail</label>
                   <InputText id='email' type='email' placeholder='Insira seu email' />
                
                    <label htmlFor="senha">Senha</label>
                    <IconField>
                        <InputIcon className="pi pi-eye"> </InputIcon>
                        <InputText id='senha' placeholder='Insira sua senha'/>
                    </IconField>
                    <Button label="Submit" />

                </form>
         </div>
        </>
    );
}
 
export default Login;