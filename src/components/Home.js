import React from 'react';
import Murakami from "./Murakami";
import Items from "./Items";

function Home({items, murakami}) {
    return (
        <>
            <Murakami data={murakami}/>
            <Items data={items} />
        </>
    );
}

export default Home;