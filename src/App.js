import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Books from './components/Books';
import Items from './components/Items';
import Murakami from './components/Murakami';
import Quiz from './components/Quiz';
import Navbar from './components/navbar';
import Login from "./components/Login";

function App() {
    const [books, setBooks] = useState([]);
    const [items, setItems] = useState([]);
    const [murakami, setMurakami] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/data')
            .then((res) => res.json())
            .then((data) => {
                setBooks(data.books || []);
                setItems(data.items || []);
                setMurakami(data.murakami || []);
            })
            .catch((err) => console.error("Data fetch error:", err));
    }, []);

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={
                    <>
                        <Murakami murakami={murakami} />
                        <Items items={items} />
                    </>
                } />
                <Route path="/books" element={<Books books={books} />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default App;
