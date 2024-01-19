import clsx from 'clsx';
import React from 'react';
import './move-button.css';
import { ArrowDownIcon, ArrowUpIcon } from './icons';

export const MoveButton: React.FC<{
    isUpDisabled: boolean;
    isDownDisabled: boolean;
    handleMoveDown: () => void;
    handleMoveUp: () => void;
    extraClass?: string;
}> = ({ isUpDisabled, isDownDisabled, handleMoveDown, handleMoveUp, extraClass = '' }) => {
    const className = clsx('move_button_container', extraClass);

    return (
        <div className={className}>
            <button className="move_button" disabled={isUpDisabled} onClick={handleMoveUp}>
                <ArrowUpIcon type={isUpDisabled ? 'disabled' : 'primary'} />
            </button>

            <button className="move_button" disabled={isDownDisabled} onClick={handleMoveDown}>
                <ArrowDownIcon type={isDownDisabled ? 'disabled' : 'primary'} />
            </button>
        </div>
    );
};
