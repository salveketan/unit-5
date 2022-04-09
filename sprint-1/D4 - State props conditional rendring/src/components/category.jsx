import "./category.css"

function Category({ image , label}){
    return (
        <div className="cat">
            <img src={image} alt="" />
            <b>{label}</b>
        </div>
    )
}

export { Category};