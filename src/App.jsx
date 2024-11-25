import IsConfirmedProvider from "./IsConfirmedProvider";
import ItemsInCartProvider from "./ItemsInCartProvider";
import MainPage from "./MainPage";

function App() {
  return (
    <IsConfirmedProvider>
      <ItemsInCartProvider>
        <MainPage></MainPage>
      </ItemsInCartProvider>
    </IsConfirmedProvider>
  );
}

export default App;
