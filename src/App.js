import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import BookList from "./components/BookList"
import fantasyBooks from "./fantasyBooks.json"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BookList books={fantasyBooks} />
      </header>
    </div>
  )
}

export default App
