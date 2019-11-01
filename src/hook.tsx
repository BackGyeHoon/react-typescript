import React from "react";

function Hook() {
    const [count, setCount] = React.useState(0);
    const multipleCount = React.useMemo(() => count * count, [count]);
    const increaseCount = React.useCallback(() => {
        setCount(prevCount => prevCount +1);
    }, []);
    React.useEffect(() => {
        console.log(multipleCount);
    }, [multipleCount]);
    return <p>Hook count: {count} <button onClick={increaseCount}>Up</button></p>;
}

export default React.memo(Hook);