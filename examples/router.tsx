import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  Link,
  useNavigate,
} from 'react-router-dom';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyComp />} />
        <Route path="/something/:id" element={<MyOtherComp />} />
        <Route
          path="*"
          element={<div>oh noez, your content is not there</div>}
        />
      </Routes>
    </BrowserRouter>
  );
};

function MyComp() {
  const navigate = useNavigate();
  return (
    <div>
      <Link to="/something/42">move</Link>
      <button onClick={() => navigate('/something/42')}>move</button>
    </div>
  );
}

function MyOtherComp() {
  const { id } = useParams<{ id: string }>();
  return <div>{id}</div>;
}
