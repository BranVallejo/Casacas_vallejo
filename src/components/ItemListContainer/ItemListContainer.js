import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({greeting}) => {
    return (
    <>
        <h1>{greeting}</h1>
        <ItemCount stock={5} initial={1}/>
    </>
    )
}

export default ItemListContainer;