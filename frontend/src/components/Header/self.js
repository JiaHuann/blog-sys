
const SelfInfo = ({ currentUser }) => {
    return (
        <div class="image">
            <a href="#"><img src={currentUser ? currentUser.avatar:'http://localhost:8000/static/default_avatar.jpg'} alt="" /></a>
        </div>
    )

}
export default SelfInfo;