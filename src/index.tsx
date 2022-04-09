import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
	<React.StrictMode>
		<App/>
	</React.StrictMode>,
	document.getElementById("root")
)

// import {createRoot} from 'react-dom/client';
// const rootElement = document.getElementById('root') as HTMLElement
// const root = createRoot(rootElement)
// root.render(<React.StrictMode><App/></React.StrictMode>)

// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
// root.render(<React.StrictMode><App/></React.StrictMode>)
