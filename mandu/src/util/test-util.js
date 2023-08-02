import React from 'react'
import {render} from '@testing-library/react'
import {Provider} from 'react-redux'
import store from "../redux/store";


const Providers = ({children}) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export const renderWithProviders = (ui, options) => render(ui, {wrapper: Providers, ...options});