import ReactDOM from 'react-dom/client';

import { Routing as Route } from './Routing';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(<Route />);
