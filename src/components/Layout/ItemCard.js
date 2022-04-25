import Classes from "../../Css/main/ItemCard.module.css"


const ItemCard = (props) => {
    return <div className={`${props.className} ${Classes.itemCard}`}>{props.children}</div>
}

export default ItemCard;