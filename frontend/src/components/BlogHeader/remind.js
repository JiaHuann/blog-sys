const ReminderBoard = ({ currentUser }) => {
    if (!currentUser) {
        console.log(currentUser)
        return (
            <div className="author-content">
                <a href="111"><h4>O F F L I N E</h4></a>
                <span>Please <a href="#">Login.</a> </span>
            </div>
        )
    } else {
        return (
            <div className="author-content">
                <a href="111"><h4>Welcome!<br/>"{currentUser.username}"</h4> </a>
            </div>
        )
    }
}
export default ReminderBoard;