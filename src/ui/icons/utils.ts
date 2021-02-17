type TIconTypes = 'secondary' | 'primary' | 'error' | 'success';

export type TIconProps = { type: TIconTypes, onClick?:() => void; };

export const getIconColor = (type: TIconTypes) => {
    return `${
        type === 'secondary'
            ? '#8585AD'
            : type === 'error'
            ? '#E52B1A'
            : type === 'success'
            ? '#00CCCC'
            : '#F2F2F3'
    }`;
};
