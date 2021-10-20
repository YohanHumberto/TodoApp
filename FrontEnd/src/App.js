import TodoDataContext from './Context/DataContext';
import AppRouter from './Router/AppRouter';

function App() {
  return (
    <TodoDataContext>
      <AppRouter/>
    </TodoDataContext>
  );
}

export default App;
