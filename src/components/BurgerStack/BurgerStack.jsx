// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = (props) => {
    return (
        <ul>
            {props.stack.map((ingredient, idx) => (
                <li
                    key={idx}
                    style={{ backgroundColor: ingredient.color }}
                >
                    {ingredient.name}
                    <button onClick={() => props.removeFromBurger(idx)}>X</button>
                </li>
            ))}
        </ul>
    )
};

export default BurgerStack;
