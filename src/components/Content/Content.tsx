import React from 'react';

interface IContentProps {
    children: React.ReactChild,
    title: string
}

export const Content = ({ children, title }: IContentProps) => {
    return (
        <div className="content">
            <h1 className="content-title">{title}</h1>
            {children}
        </div>
    );
};
