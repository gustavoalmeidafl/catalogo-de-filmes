import "primeflex/primeflex.css"
import "primeicons/primeicons.css"
import "primereact/resources/themes/lara-light-blue/theme.css"
import Paths from "./routes/paths";
import "tailwindcss";
import { useState } from "react";

const App = () => {

      const [logado, setLogado] = useState(false);

  return (
    <> 
    <AuthContext context={{Logado, setLogado}}> 
    <Paths/>
    </AuthContext>
    </>
   );
}
 
export default App;