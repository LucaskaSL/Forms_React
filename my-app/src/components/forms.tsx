import { useState } from "react";
import './forms.css'

export default function Form(){
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({name, age});

    setName("");
    setAge("");
    }

return (
    <div className="container-center">
    <form 
        onSubmit={handleSubmit}
        style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            maxWidth: "300px"
        }}
        >
    <input
        type = "text"
        placeholder = "Nome"
        value = {name}
        onChange={(e) => setName(e.target.value)}
    />

    <input
        type = "number"
        placeholder = "Idade"
        value = {age}
        onChange={(e) => setAge(e.target.value)}
    />

    <button type="submit">
        Enviar
    </button>

    </form>
    </div>
);

};