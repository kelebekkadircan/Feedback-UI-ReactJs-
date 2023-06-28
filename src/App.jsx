import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "./components/Header";
// import FeedbackItem from "./components/FeedbackItem";
import { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import Card from "./components/shared/Card";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackData from "./data/FeedbackData";
import AboutIconLink from './components/AboutIconLink';
import AboutPage from './pages/AboutPage';


function App() {

    const [feedback, setFeedback] = useState(FeedbackData)

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
        console.log(newFeedback);
    }

    const deleteFeedback = (id) => {
        if (window.confirm('are you sure you want to delete')) {

            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return (

        <Router>
            <Header />
            <div className="container">
                {/* <h1>My App</h1> */}
                <Routes>
                    <Route exact path='/' element={
                        <>
                            <FeedbackForm handleAdd={addFeedback} />
                            <FeedbackStats feedback={feedback} />
                            <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
                        </>
                    }>

                    </Route>

                    <Route path='/about' element={<AboutPage />} />
                </Routes>
                <AboutIconLink />

            </div>


        </Router>
    )
}
export default App