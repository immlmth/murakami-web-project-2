import React from 'react';


function Items({items}) {
    return (
        <div className="cards">
            <h1 style={{textAlign: "center"}}>Enjoy Murakami`s books vibe</h1>
            <div className="cards-container">
                <div className="cards-wrapper">
                    <ul className="cards-list">
                        <div className="items-container">
                            <div className="row">
                                {items.map((item, index) => (
                                    <div className="col-md-4" key={index}>
                                        <div className="card" style={{width: "18rem"}}>
                                            <img src={item.image} className="card-img-top"/>
                                            <div className="card-body">
                                                <p className="card-text">{item.title}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Items;