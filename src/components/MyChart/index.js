import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const MyChart = (props) => (
    <div>
        <p>MyChart Component</p>
        <Text field={props.fields.heading} />
    </div>
);

export default MyChart;
