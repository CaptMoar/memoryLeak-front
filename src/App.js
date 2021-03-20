import React from 'react'
import { Provider } from 'react-redux'
import { AppRouter } from './components/router/AppRouter'
import { store } from './components/store/store'

export const App = () => {
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    )
}
