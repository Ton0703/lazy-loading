import React, { Suspense } from 'react';
import './App.css';
import Loading from './component/loading';


//import Tag from './component/tag'
const Tag = React.lazy(() => import('./component/tag'))
//const Tag = Lazy(React.lazy(() => import('./component/tag')))
console.log(() => import('./component/tag'))

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading /> }>
         <Tag val='hello' />
      </Suspense>
    </div>
  );
}

export default App;
