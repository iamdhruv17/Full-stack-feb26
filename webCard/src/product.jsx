export function product({data}){
    return(
        <div>
            <h4>Name:{data.name}</h4>
            <p>Desc:{data.desc}</p>
            <p>Mrp:{data.mrp}</p>
        </div>
    );
}