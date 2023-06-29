import React from "react";
import Breadcrumbs from "./Breadcrumbs";
import * as level1 from '../styles/Level1';

const Level1 = () => {
    return(
        <level1.Container>
            <Breadcrumbs />
            <level1.Nav to="/home/level1/level2">level2</level1.Nav>
        </level1.Container>
    )
}

export default Level1;