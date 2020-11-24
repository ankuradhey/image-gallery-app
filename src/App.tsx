import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Gallery } from "./components/Gallery";
import { Header } from "./components/Header";
import { ImageDetail } from "./components";
import { AppContext } from "./context/AppContext";
import "./App.css";

function App() {
    const [gallery, setGallery] = useState([]);

    return (
        <div className="container">
            <Header />
            <AppContext.Provider
                value={{
                    gallery,
                    setGallery,
                }}
            >
                <Router>
                    <Switch>
                        <Route exact path="/" component={Gallery}></Route>
                        <Route exact path="/image/:id" component={ImageDetail}></Route>
                    </Switch>
                </Router>
            </AppContext.Provider>
        </div>
    );
}

export default App;
