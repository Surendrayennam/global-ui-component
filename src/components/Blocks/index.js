import React from 'react';
import classnames from 'classnames';

const Blocks = ({ children, hasDivider, count }) => (
    <div
        className={classnames('blocks', {
            'blocks--divider': hasDivider,
            [`blocks--${count}up`]: count,
        })}>
        {children}
    </div>
);

export default Blocks;
