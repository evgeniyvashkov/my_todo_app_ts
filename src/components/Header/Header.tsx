import React, { ReactChild } from 'react';

interface IHeaderProps {
    children: ReactChild
}

export const Header = ({ children }: IHeaderProps) =>
    <header className="header">
        <h1>{children}</h1>
    </header>