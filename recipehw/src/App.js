import recipes from "./recipe.json"
import PageBoard from "./components/Page"

function App() {
  return (
    <>
      <PageBoard recipes={recipes} />
    </>
  );
}

export default App;
