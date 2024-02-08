type TIconTypes = 'secondary' | 'primary' | 'error' | 'success' | 'disabled';

export type TIconProps = { type: TIconTypes; className?: string; onClick?: () => void };

export const getIconColor = (type: TIconTypes): string => {
    return `${
        type === 'secondary'
            ? '#8585AD'
            : type === 'error'
            ? '#E52B1A'
            : type === 'success'
            ? '#00CCCC'
            : type === 'disabled'
            ? '#3A3A55'
            : '#F2F2F3'
    }`;
};
