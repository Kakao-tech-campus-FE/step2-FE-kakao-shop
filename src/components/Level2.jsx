import React from "react";
import Breadcrumbs from "./Breadcrumbs";
import * as level2 from "../styles/Level2";
const Level2 = () => {
    return(
        <level2.Container>
            <Breadcrumbs />
            <level2.Desc>
                Last Page
            </level2.Desc>
        </level2.Container>
    )
}

export default Level2;