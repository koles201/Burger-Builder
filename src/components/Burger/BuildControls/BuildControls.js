import React from 'react';
import BuildControl from './BuildControl/BuildControl'

import classes from './BuildControls.module.css'

const controls = [
    {
        label: 'Salad',
        type: 'salad'
    },
    {
        label: 'Cheese',
        type: 'cheese'
    },
    {
        label: 'Bacon',
        type: 'bacon'
    },
    {
        label: 'Meat',
        type: 'meat'
    }
];

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(el =>
                <BuildControl
                    label={el.label}
                    key={el.type}
                    disabled={props.disabledTypes[el.type]}
                    remove={() => props.removeIngredient(el.type)}
                    added={() => props.newIngredientAdded(el.type)}
                />
            )}
            <button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.ordered}>{props.isAuth ? 'ORDER NOW' : 'SING UP TO ORDER'}</button>
        </div>
    );
};

export default buildControls;