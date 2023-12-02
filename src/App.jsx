import { useEffect, useState } from "react";
import "./App.css";
import { getAllUsers } from "./Services/Operations/UserAPI";

function App() {
    const [count, setCount] = useState(0);

    const fetchData = async () => {
        const result = await getAllUsers();
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div>
                <h1 className="font-semibold ">hello</h1>
            </div>
        </>
    );
}

export default App;
