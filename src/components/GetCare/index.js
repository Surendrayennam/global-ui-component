import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const GetCare = (props) => (
    <div>
        <p>GetCare Component</p>
        <Text field={props.fields.heading} />
    </div>
);

export default GetCare;
