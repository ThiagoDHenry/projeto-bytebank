import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("V", 10000, 12345678900);
diretor.cadastrarSenha("123456")
const gerente = new Gerente("Nami", 5000, 12378945601);
gerente.cadastrarSenha("123")

const cliente = new Cliente("Sneaky", 78945612379, "456")

const gerenteLogado = SistemaAutenticacao.login(gerente, "123");
const diretorLogado = SistemaAutenticacao.login(diretor, "123456");

const clienteLogado=  SistemaAutenticacao.login(cliente, "456")

console.log(gerenteLogado,diretorLogado,clienteLogado)
        
/*                                                
Orientação Objeto
  *Polimorfismo 
  *Encapsulamento  
*/   


