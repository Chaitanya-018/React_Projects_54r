import  "./Styles.css"
function Content() {
    return (
        <>
            <section className="content">
                <h2>Our Special Dishes</h2>

                <div className="food-container">
                    <div className="food-card">
                        <h3>Pizza</h3>
                        <p>Cheesy and delicious Italian pizza.</p>
                        <span>₹299</span>
                    </div>

                    <div className="food-card">
                        <h3>Burger</h3>
                        <p>Juicy burger with fresh vegetables.</p>
                        <span>₹199</span>
                    </div>

                    <div className="food-card">
                        <h3>Biryani</h3>
                        <p>Authentic spicy Hyderabadi biryani.</p>
                        <span>₹349</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Content
