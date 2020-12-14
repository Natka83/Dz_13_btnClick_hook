import React, { useState } from "react";

export default function Quote (props){

    return (<div>
    <blockquote>{props.text}</blockquote>
    <p>{props.author}</p>
    </div>
    )
}


