import ReactDOM from 'react-dom/client';

import { Root as Route } from './Route';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(<Route />);
