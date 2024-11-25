import IsConfirmedProvider from "./IsConfirmedProvider";
import MainPage from "./MainPage";

function App() {
  return (
    <IsConfirmedProvider>
      <MainPage></MainPage>
    </IsConfirmedProvider>
  );
}

export default App;
