// src/components/IngredientList/IngredientList.jsx

const IngredientList = (props) => {
    return (
    <ul>
        {props.availableIngredients.map((availableIngredient, idx) => {
            return <li key={idx}>{availableIngredient.name}</li>;
        })}
    </ul>
    )
};

export default IngredientList;
