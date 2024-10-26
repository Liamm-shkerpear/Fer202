import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './slot2/create-jsx-elements/MyComponent';
import reportWebVitals from './reportWebVitals';
import MySection from './slot2/create-jsx-elements/MySection';
import MyButton from './slot2/create-jsx-elements/MyButton';
import MyComponent from './slot2/create-jsx-elements/MyComponent';


const array = ["Flutter", "Vue", "React", "Next"];

const object = {
  Flutter: 1,
  Vue: 2,
  React: 3,
  Next: 4
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<section>
  <h2>Array</h2>
  <ul>
    {array.map((i) => (<li key={i}>{i}</li>))}
  </ul>
  <h2>Object</h2>
  <ul>
    {Object.keys(object).map((i) => (<li key={i}><strong>{i}: </strong>{object[i]}</li>))}
  </ul>
</section>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
