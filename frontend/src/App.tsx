import Footer from "./components/layout/Footer"
import Navigation from "./components/layout/Navigation"
import HomePage from "./pages/HomePage"

const App = () => {
    return (
        <div>
            <Navigation />
            <main>
                <HomePage />
            </main>
            <Footer />
        </div>
    )
}

export default App
