import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const Location = (props) => (
    <div>
        <p>Location Component</p>
        <Text field={props.fields.heading} />
    </div>
);

export default Location;
