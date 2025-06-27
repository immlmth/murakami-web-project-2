import React, { useState } from 'react';

function Books({ books }) {
    const [selectedBook, setSelectedBook] = useState(null);

    const handleClose = () => setSelectedBook(null);

    return (
        <div style={{ marginTop: "60px", backgroundColor: "#e3e2e2" }}>
            <h2 className="text-center mb-5">The most popular Murakami`s books</h2>
            <div className="books-container-fluid">
                <div className="row g-3">
                    {books.map((book, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="card mb-3 h-100" style={{ maxWidth: "400px" }}>
                                <div className="row g-0">
                                    <div className="col-md-4 d-flex align-items-center">
                                        <img src={book.image} className="img-fluid rounded-start" alt={book.title}
                                             style={{ objectFit: "cover", height: "auto", width: "auto" }} />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{book.title}</h5>
                                            <p className="card-text">{book.description}</p>
                                            <button className="btn btn-danger" onClick={() => setSelectedBook(book)}>See details</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedBook && (
                <div
                    className="modal d-block"
                    tabIndex="-1"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{selectedBook.title}</h5>
                                <button type="button" className="btn-close" onClick={handleClose}></button>
                            </div>
                            <div className="modal-body">
                                <p>{selectedBook.details}</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" onClick={handleClose}>
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Books;
