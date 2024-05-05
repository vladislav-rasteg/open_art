import { ToastContainer } from "react-toastify";
import "./index.scss"
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import { TonConnectUIProvider } from '@tonconnect/ui-react';


export const App = () => {

    console.log(`${window.location.origin}/tonconnect-manifest.json`)
    return  (
        <div className="app_wrapper">
            <ToastContainer />
            <TonConnectUIProvider manifestUrl={`https://app.ston.fi/tonconnect-manifest.json`}>
                <BrowserRouter>
                    <Router />
                </BrowserRouter>
            </TonConnectUIProvider>
        </div>
    )
}