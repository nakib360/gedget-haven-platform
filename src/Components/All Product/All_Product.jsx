import { useEffect, useState } from "react";
import Card from "../Card/card";

const All_Product = () => {
    const [gadgets, setData] = useState([]);

    useEffect(() => {
        fetch("/All-Products.json")
            .then(res => res.json())
            .then(data => setData(data.electronics));
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-200 overflow-auto">
            {
                gadgets.map(item => <Card key={item.id} data={item} />)
            }
        </div>
    );
};

export default All_Product;
