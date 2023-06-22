import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";
import { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import Card from "./components/shared/Card";
import FeedbackStats from "./components/FeedbackStats";


function App() {

    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        if (window.confirm('are you sure you want to delete')) {

            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return (

        <>
            <Header />
            <div className="container">
                {/* <h1>My App</h1> */}
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
                <Card>
                    Hello World
                </Card>
            </div>

        </>
    )
}
export default App