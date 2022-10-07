import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {
    Homepage,
    Register,
    ErrorPage,
    Login,
    Hotels,
    Hotel,
    BookingDetails,
    SearchByPropertyType,
} from './pages'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
                <Route path="hotels" element={<Hotels />} />
                <Route path="hotels/:id" element={<Hotel />} />
                <Route path="details" element={<BookingDetails />} />
                <Route path="propertytype" element={<SearchByPropertyType />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    )
}

export default App
