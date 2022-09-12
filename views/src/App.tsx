import { useRoutes } from 'react-router-dom'
import { useGlobalHTTPErrorHandler } from './common/hooks/useGlobalHTTPErrorHandler.hook';
import { routes } from './router/routes';
import { ToastContainer } from 'react-toastify';

function App() {
  const page = useRoutes(routes);
  useGlobalHTTPErrorHandler()

  return (
    <main className="App">
      {page}
      <ToastContainer />
    </main>
  );
}

export default App;
