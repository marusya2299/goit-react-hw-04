export default function Feedback({good, neutral, bad, positiveFeedback, totalFeedback}){
    return(
        <ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {totalFeedback}</li>
            <li>Positive: {positiveFeedback}%</li>
        </ul>
    )
}