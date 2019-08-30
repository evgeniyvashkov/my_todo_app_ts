import React from 'react'

interface IButtonProps {
    className: string,
    children: React.ReactNode,
    onClick: () => void
}

export const Button = ({ className, children, onClick }: IButtonProps) => {
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    )
}
