import React, { useMemo } from 'react';

import { CurrencyIcon } from './icons';
import { FormattedDate } from './formatted-date/formatted-date';
import { OrderStatus } from './order-status';
import './order-card.css';

type Props = {
    ingredients: Array<{
        image: string;
        name: string;
    }>;
    totalPrice: number;
    showStatus?: boolean;
    date: Date;
    orderNumber: number;
    name: string;
    status: string;
} & Omit<React.HTMLProps<HTMLDivElement>, 'name'>;

export const OrderCard: React.FC<Props> = ({
    ingredients,
    totalPrice,
    showStatus,
    date,
    orderNumber,
    name,
    status,
}) => {
    const maxIngredients = 6;

    const orderInfo = useMemo(() => {
        if (!ingredients.length) return null;

        const ingredientsToShow = ingredients.slice(0, maxIngredients);

        const remains =
            ingredients.length > maxIngredients ? ingredients.length - maxIngredients : 0;

        return {
            ingredientsToShow,
            remains,
        };
    }, [ingredients]);

    if (!orderInfo) return null;

    return (
        <div className="p-6 mb-4 mr-2 order-card">
            <div className="order-card__info">
                <span className="text text_type_digits-default">
                    #{String(orderNumber).padStart(6, '0')}
                </span>
                <FormattedDate
                    date={date}
                    className="text text_type_main-default text_color_inactive"
                />
            </div>
            <h4 className="pt-6 text text_type_main-medium order-card__name">{name}</h4>
            {showStatus && <OrderStatus status={status} />}
            <div className="pt-6 order-card__content">
                <ul className="order-card__ingredients">
                    {orderInfo.ingredientsToShow.map((ingredient, index) => {
                        const right = 20 * index;
                        return (
                            <li
                                className="order-card__img-wrap"
                                style={{ right: right }}
                                key={index}
                            >
                                <img
                                    style={{
                                        opacity:
                                            orderInfo.remains && maxIngredients === index + 1
                                                ? '0.5'
                                                : '1',
                                    }}
                                    className="order-card__img"
                                    src={ingredient.image}
                                    alt={ingredient.name}
                                />
                                {maxIngredients === index + 1 ? (
                                    <span className="text text_type_digits-default order-card__remains">
                                        {orderInfo.remains > 0 ? `+${orderInfo.remains}` : null}
                                    </span>
                                ) : null}
                            </li>
                        );
                    })}
                </ul>
                <div>
                    <span className="text text_type_digits-default pr-1 order-card__total">
                        {totalPrice}
                    </span>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
        </div>
    );
};
