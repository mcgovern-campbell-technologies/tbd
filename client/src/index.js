import React from 'react';
import ReactDOM from 'react-dom';
import 'rxjs'
import './styles/index.css';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';

console.log(process.env.neo4jConnectionString)
console.log(process.env.DOMAIN)

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
