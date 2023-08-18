import {Dev} from "./Dev";

export function Exemplo({lista}){
    return (
        <div>
        {lista.map((pessoa)=>(
            <ul key={index}>
                <il>{pessoa.nome}, {pessoa.idade} anos, de {pessoa.cidade}</il>
            </ul>
        ))};
        <Dev nome= "felipe"/>
        </div>
    );
}