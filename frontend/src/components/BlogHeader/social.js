const SocialIcons = ({ currenUser }) => {
    if (!currenUser) {
        <div class="social-network">
            <ul class="soial-icons">
                <li>
                    <a href="https://fb.com/templatemo"><i class="fa fa-facebook"></i></a>
                </li>
                <li>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                </li>
                <li>
                    <a href="#"><i class="fa fa-linkedin"></i></a>
                </li>
                <li>
                    <a href="#"><i class="fa fa-dribbble"></i></a>
                </li>
                <li>
                    <a href="#"><i class="fa fa-rss"></i></a>
                </li>
            </ul>
        </div>
    }
}

export default SocialIcons