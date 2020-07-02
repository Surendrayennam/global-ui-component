import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const Provider = (props) => (
    <div>
        <p>Provider Component</p>
        <Text field={props.fields.heading} />
    </div>
);

export default Provider;
