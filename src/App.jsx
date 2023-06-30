import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "./components/Header";
// import FeedbackItem from "./components/FeedbackItem";

import FeedbackList from "./components/FeedbackList";

import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutIconLink from './components/AboutIconLink';
import AboutPage from './pages/AboutPage';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {



    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className="container">
                    {/* <h1>My App</h1> */}
                    <Routes>
                        <Route exact path='/' element={
                            <>
                                <FeedbackForm />
                                <FeedbackStats />
                                <FeedbackList />
                            </>
                        }>

                        </Route>

                        <Route path='/about' element={<AboutPage />} />
                    </Routes>
                    <AboutIconLink />

                </div>


            </Router>
        </FeedbackProvider>
    )
}
export default App