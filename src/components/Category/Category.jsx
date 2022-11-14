import React, { memo } from "react";

function Category(props) {
    return <span>{props.category.name}</span>;
}

export default memo(Category)
