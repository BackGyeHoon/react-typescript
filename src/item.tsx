import React from 'react';

interface IProps extends React.PropsWithChildren<{}> {
    count: number;
}

function Item(props: IProps) {
    console.log("item render");
    return <div>This is item! ({props.count}) {props.children}</div>;
}

export default React.memo(Item);