import React, { CSSProperties } from 'react';
import { Counter } from './counter';
import { CurrencyIcon } from './icons';
import clsx from 'clsx';

import './burger-ingredient.css';

type TBurgerIngredientProps = {
    className?: string;
    image: string;
    price: number;
    name: string;
    count: number;

    style?: CSSProperties;
    altImg?: string;
} & React.HTMLProps<HTMLDivElement>;

export const BurgerIngredient: React.FC<TBurgerIngredientProps> = ({
    className,
    image,
    price,
    name,
    count,

    style,
    altImg,

    ...rest
}) => {
    return (
        <div className={clsx('burger-ingredient', className)} style={style} {...rest}>
            {count && <Counter count={count} />}
            <img src={image} alt={altImg} />
            <div className="burger-ingredient__cost mt-2 mb-2">
                <p className="text text_type_digits-default mr-2">{price}</p>
                <CurrencyIcon type="primary" />
            </div>
            <p className="burger-ingredient__text text text_type_main-default">{name}</p>
        </div>
    );
};
