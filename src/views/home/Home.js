import React from "react";
import One from "./One";
import Two from "./Two";
import Three from "./Three";
import Four from "./Four";
import Five from "./Five";
import Six from "./Six";
import Seven from "./Seven";
import Eight from "./Eight";
import Night from "./Night";
import TenLast from "./TenLast";

const Home = () => {
    return (
        <div className="select-none">
            <One />
            <Two />
            <Three />
            <Four />
            <Five />
            <Six />
            <Seven />
            <Eight />
            {/* <Night /> */}
            <TenLast />
        </div>
    );
}

export default Home;