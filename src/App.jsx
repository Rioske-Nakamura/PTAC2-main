import "./app.css"
import { Exemplo } from "./Exemplo"
import { Dev } from "./Dev"

export default function App(){
    const nomes= [
        {nome: "Alce", idade: 17, cidade: "Nova Andradina" },
        {nome: "Alguem", idade: 23, cidade: "Maracas"},
        {nome: "Coiso", idade: 13244, cidade: "Flor do Campo"}
    ];
    return (
        <div>
            <h1>Hello Word!</h1>
            <Exemplo lista={nomes}></Exemplo>
        </div>
    )
} 