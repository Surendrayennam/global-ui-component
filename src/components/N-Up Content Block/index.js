import React from 'react';
import Tier from '../Tier';
import Blocks from '../Blocks';
import Callout from '../Callout';

const NUpContentBlock = (props) => {
    const showDivider = props.params.showDivider === '1';
    const calloutItems = props.fields.items;
    const fourUp = calloutItems.length === 4;
    // const printData = JSON.stringify(props, undefined, 2);
    // console.log(printData);

    return (
        <Tier>
            <Blocks hasDivider={showDivider} count={calloutItems.length}>
                {calloutItems.map((item, index) => (
                    <div className="blocks__item" key={index}>
                        <Callout fields={item.fields} fourUp={fourUp} />
                    </div>
                ))}
            </Blocks>
        </Tier>
    );
};

export default NUpContentBlock;
