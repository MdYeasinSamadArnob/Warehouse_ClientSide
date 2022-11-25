import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
// import 'antd/dist/antd.min.css'
import 'antd/dist/antd.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// import { BrowserRouter } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'));

ReactDOM.render(
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
    </QueryClientProvider>
  </HelmetProvider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from "react-router-dom";
// import {
//   QueryClient,
//   QueryClientProvider,
// } from 'react-query'

// const queryClient = new QueryClient()
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <QueryClientProvider client={queryClient}>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </QueryClientProvider>
//   </React.StrictMode>
// );
