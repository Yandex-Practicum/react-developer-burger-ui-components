import React from 'react';

const statusText: { [key: string]: string } = {
    pending: 'Готовится',
    done: 'Выполнен',
    created: 'Создан',
};

type OrderStatusProps = {
    status: string;
};

export const OrderStatus: React.FC<OrderStatusProps> = ({ status }) => {
    let textStyle = '';
    switch (status) {
        case 'pending':
            textStyle = '#E52B1A';
            break;
        case 'done':
            textStyle = '#00CCCC';
            break;
        default:
            textStyle = '#F2F2F3';
    }

    return (
        <span className="text text_type_main-default pt-2" style={{ color: textStyle }}>
            {statusText[status]}
        </span>
    );
};
