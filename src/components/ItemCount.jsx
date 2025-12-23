import { useEffect, useState } from "react"

const ItemCount = ({ stock }) => {
    const [count, setCount] = useState(1)
    useEffect(()=>{},[count])
    return (
        <>
            <div className="field has-text-centered">
                <label className="label">Cantidad {count}</label>
            </div>
            <div className="field is-grouped is-grouped-centered">
                <p className="control">
                    <button className="button is-light" onClick={()=>setCount(count-1)} disabled={count<1}>
                        Quitar
                    </button>
                </p>
                <p className="control">
                    <button className="button is-primary" onClick={()=>setCount(count+1)} disabled={count>=stock}>
                        Agregar
                    </button>
                </p>
            </div>
        </>
    )

}

export default ItemCount