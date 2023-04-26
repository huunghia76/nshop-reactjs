import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import React from "react";
import Shopping from './page/Shopping';
import SingleProduct from './page/SingleProduct';
import Contact from './page/Contact';
import Blog from './page/Blog';
import About from './page/About';
import Cart from './page/Cart';
import Header from './component/defaultLayout/Header';
import Footer from './component/defaultLayout/Footer';
import User from './page/User';
import { child, get, ref } from "firebase/database";
import { database } from './firebase';
import InputField from './component/form/InputField';

function App() {
    const dbRef = ref(database);
    get(child(dbRef, `users`)).then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });

    return (
        <>

            <Router>
                <Header></Header>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shopping />} />
                    <Route path="/descr_product" element={<SingleProduct />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/user" element={<User />} />
                </Routes>
                <Footer></Footer>
            </Router>

        </>
    );
}

export default App;
