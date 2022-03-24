import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import BookList from "./components/BookList"
import fantasyBooks from "./fantasyBooks.json"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Registration from "./components/Registration"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Registration />} />
            <Route path="/BookList" element={<BookList books={fantasyBooks} />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  )
}

export default App
