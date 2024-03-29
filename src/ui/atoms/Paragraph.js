import React from 'react';

function Paragraph({ className, children }) {
    return (
        <p className={className}>{children}</p>
    )
}

export default Paragraph;