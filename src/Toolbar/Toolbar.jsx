import React from 'react';

const Toolbar = (props) => {
const buttons = props.filters.map((f) => 
<button key={f} 
        className={f === props.active ? 'btn active' : 'btn'} 
        onClick={() => props.onSelectFilter(f)}>
            {f}
</button>)
    return (
    <div>{buttons}</div>
    )
}

export default Toolbar;