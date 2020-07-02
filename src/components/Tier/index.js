import * as React from 'react';

const Tier = ({ children }) => (
    <div className="tier">
        <div className="tier__inner">{children}</div>
    </div>
);

export default Tier;
