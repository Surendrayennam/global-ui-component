import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const PayBill = (props) => (
    <div>
        <p>PayBill Component</p>
        <Text field={props.fields.heading} />
    </div>
);

export default PayBill;
