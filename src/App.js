import './App.css';
import Header from "./components/Header";
import Body from './components/Body';
import WatchPage from './components/WatchPage';
import DemoPage from './components/DemoPage';
import { Provider } from 'react-redux';
import appStore from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import UserLogin from './components/UserLogin ';

const appRouter = createBrowserRouter([
 {
  path:"/",
  element: <Body />,
  children: [
    {
    path: "/",
    element: <MainContainer />
    },
    {
      path: "watch",
      element: <WatchPage />
    },
    {
      path: "sign-in",
      element: <UserLogin />
    },
    // for some other concept of react
    {
      path: "demo",
      element: <DemoPage />
    }
]
 }
  
])
function App() {
  return (

      <Provider store={appStore}>
        <div>
     <Header />
     <RouterProvider router={appRouter} />
     </div>
     </Provider>
 
  );
}

export default App;
