import React, { ReactElement } from "react";

const Close = (): ReactElement => {
    return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 5L5 15" stroke="black" strokeWidth="2" strokeLinejoin="round"  />
        <path d="M5 5L15 15" stroke="black" strokeWidth="2" strokeLinejoin="round"  />
    </svg>

}

export default Close;