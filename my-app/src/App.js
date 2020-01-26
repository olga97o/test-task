import React from 'react';
import {Provider} from "react-redux";
import axios from 'axios';

import FormComponent from "./components/FormComponent/FormComponent";
import store from "./Store";
import './App.css';

axios.defaults.baseURL = ' http://test.clevertec.ru/tt';

function App() {
    return (
        <Provider store={store}>
            <FormComponent/>
        </Provider>
    );
}

export default App;
