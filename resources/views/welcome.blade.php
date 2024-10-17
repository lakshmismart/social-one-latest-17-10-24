<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Business Platform</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #f8f9fa;
}

.container {
    width: 80%;
    margin: 0 auto;
}

header {
    background-color: #fff;
    padding: 20px 0;
    border-bottom: 1px solid #ddd;
}

.logo img {
    height: 40px;
}

nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 20px;
}

nav ul li {
    display: inline;
}

nav ul li a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
}

.auth-buttons {
    display: flex;
    gap: 10px;
    flex-direction: row-reverse;
}

.manage-business,
.sign-in {
    padding: 10px 20px;
    border: none;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
    border-radius: 5px;
}

.manage-business {
    background-color: #6c757d;
}

.hero {
    padding: 50px 0;
    text-align: center;
    background-color: #e9ecef;
}

.hero h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
}

.search-box {
    display: flex;
    justify-content: center;
    gap: 10px;
}

.fsd input {
    width: 300px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

.fsd button {
    padding: 10px 20px;
    border: none;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
    border-radius: 5px;
}

.business-images {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    gap: 20px;
}

.top-rated {
    padding: 50px 0;
    background-color: #fff;
    text-align: center;
}

.community {
    padding: 50px 0;
    background-color: #f8f9fa;
}

.community-icons {
    display: flex;
    justify-content: center;
    gap: 50px;
}

.community-icons .icon {
    text-align: center;
}

.community-icons .icon img {
    height: 50px;
}

.offers-reviews {
    padding: 50px 0;
    text-align: center;
    background-color: #e9ecef;
}

.offers-reviews h2 {
    margin-bottom: 20px;
}

.steps {
    padding: 50px 0;
    background-color: #fff;
    text-align: center;
}

.steps .step {
    margin-bottom: 20px;
}

.shop-details {
    padding: 50px 0;
    background-color: #007bff;
    color: #fff;
    text-align: center;
}

.shop-details h2 {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-around;
}

.faq {
    padding: 40px 20px;
    background-color: #f7f7f7;
    text-align: center;
}

.faq h2 {
    font-size: 2em;
    margin-bottom: 40px;
}

.faq-item {
    margin-bottom: 20px;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    text-align: left;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    cursor: pointer;
}

.faq-item h3 {
    font-size: 1.5em;
    margin-bottom: 10px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.toggle-symbol {
    font-size: 1.5em;
    margin-left: 10px;
    color: #333;
}

.faq-answer {
    display: none;
    margin-top: 10px;
}


footer {
    padding: 40px 20px;
    background-color: #333;
    color: #fff;
    text-align: center;
}

.footer-menu {
    list-style-type: none;
    padding: 0;
    margin: 0;
    margin-bottom: 20px;
}

.footer-menu li {
    display: inline-block;
    margin-right: 20px;
}

.footer-menu li a {
    text-decoration: none;
    color: #fff;
}

.social-icons a img {
    max-width: 30px;
    margin-right: 10px;
}
.esd{
    display: flex;
    justify-content: space-evenly;
}
.vsd{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
.nsd{
    display: flex;
    /* justify-content: space-evenly; */
}
.fsd{
   display: flex;
    /* justify-content: space-evenly; */
    flex-direction: row;
    align-items: center;
}
.lite{
    display: flex;
    /* justify-content: space-evenly; */
    /* flex-direction: column-reverse; */
}
.lites{
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
}
.jhs{
    display: flex;
    justify-content: center;
}
.ghs{
    display: flex;
    justify-content: center;
}
.mns{
  display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
}

    </style>
</head>
<body>
    <header>
        <div class="container">
            <div class="esd">
            <div class="logo">
                <img src="C:/Users/91638/Downloads/th.jpg" alt="Maple Business Logo">
            </div>
            <nav>
                <ul>
                    <li><a href="#">Overview</a></li>
                    <li><a href="#">Business Solutions</a></li>
                    <li><a href="#">Resources</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </nav>
            <div class="auth-buttons">
                <button class="manage-business">Manage Business</button>
                <button class="sign-in">Sign In</button>
            </div>
            </div>
        </div>
    </header>

    <section class="hero">
        <div class="container">
            <div class="nsd">
            <div class="vsd">
                <div class="search-box">
                <h1>Discover The Best Local Businesses And Share Your Experiences.</h1>
            </div>
            <div class="fsd">
            <input type="text" placeholder="Search The Shops">
            <button>Manage Business</button>
            </div>
            </div>
            <div class="business-images">
                <!-- Image used for business images -->
                <img src="{{ asset('images/Group 1260.png') }}" alt="Business Image">
            </div>
            </div>
        </div>
    </section>

    <section class="top-rated">
        <div class="container">
            <div class="lite">
            <h2 class="lites">Find Top-Rated Businesses In Your Area Or Add Your Own.</h2>
            <!-- Content with image -->
            <img src="{{ asset('images/Group 1255.png')}}" alt="Top Rated Businesses">
            </div>
        </div>
    </section>

    <section class="community">
        <div class="container">
            <h2 class="jhs">Join Our Community</h2>
            <div class="community-icons">
                <div class="icon">
                    <img src="{{ asset('images/Group 1414.png')}}" alt="Listings">
                    <p>Listings</p>
                     <p>Explore A Wide Range Of Businesses In Your Area.</p>
                </div>
                <div class="icon">
                    <img src="{{ asset('images/Group 1413.png')}}" alt="Reviews">
                    <p>Reviews</p>
                     <p>Trustworthy Reviews From Real Customers.</p>

                </div>
                <div class="icon">
                    <img src="{{ asset('images/Group 1412.png')}}" alt="Free">
                    <p>Free</p>
                    <p>No Hidden Fees For Users Or Business Owners.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="offers-reviews">
        <div class="container">
            <div class="ghs">
                <img src="{{ asset('images/Group 1264.png')}}" alt="Offers and Reviews">
                <div class="mns">
            <h2>Get Offers And Reviews About The Stores</h2>
            <p>Discover exclusive deals and read authentic reviews about your favorite stores, helping you shop smarter and save more.</p>
            <button>Know More</button>
        </div>

            </div>
        </div>
    </section>

    <section class="steps">
        <div class="container">
            <h2 >Simple Steps To Manage Your Business Accounts</h2>
            <div class="lite">
            <div class="step">
                
                <h3>1. Create Account With Us</h3>
                <p>Discover exclusive deals and read authentic reviews about your favorite stores.</p>
            
                
                <h3>2. Add Business Details</h3>
                <p>Discover exclusive deals and read authentic reviews about your favorite stores.</p>
            
               
                <h3>3. Maintain Your Profile</h3>
                <p>Discover exclusive deals and read authentic reviews about your favorite stores.</p>
            </div>
             <img src="{{ asset('images/Group 1274.png')}}" alt="Step 3">
             </div>
        </div>
    </section>

    <section class="shop-details">
        <div class="container">
             <div class="ghs">
            <div class="image">
                <!-- Image for shop details -->
                <img src="{{ asset('images/Frame.png')}}" alt="Shop Details">
            </div>
            <h2>Get The Exact And Updated Details Of The Shop.</h2>
            </div>
        </div>
    </section>


     <section class="offers-reviews">
        <div class="container">
            <div class="ghs">
                <img src="{{ asset('images/Group 1280.png')}}" alt="Offers and Reviews">
                <div class="mns">
            <h2>Manage your all business in
 one platformer</h2>
            <p>Easily manage all your businesses from a single platform. Simplify operations, track performance, and boost efficiency with seamless tools designed to support your growth and success.</p>
            
        </div>

            </div>
        </div>
    </section>
   <section class="faq">
    <div class="container faq-container">
        <h2>Frequently Asked Questions</h2>
        <div class="faq-item">
            <h3>How to create the business account ?
                <span class="toggle-symbol">+</span>
            </h3>
            <p class="faq-answer">Why our clients Love Us. A good reputation is more valuable than money. Taken together, they get another reason to love your clients. The client who does not value his own client gives up this opportunity, recreates, and strives to do great work. Do great work gives clients more trust and makes the client happy.</p>
        </div>
        <div class="faq-item">
            <h3>How to add the location in my business ?
                <span class="toggle-symbol">+</span>
            </h3>
            <p class="faq-answer">Why our clients Love Us. A good reputation is more valuable than money. Taken together, they get another reason to love your clients. The client who does not value his own client gives up this opportunity, recreates, and strives to do great work. Do great work gives clients more trust and makes the client happy.</p>
        </div>
        <div class="faq-item">
            <h3>How the review helps the user get the right description ?
                <span class="toggle-symbol">+</span>
            </h3>
            <p class="faq-answer">Why our clients Love Us. A good reputation is more valuable than money. Taken together, they get another reason to love your clients. The client who does not value his own client gives up this opportunity, recreates, and strives to do great work. Do great work gives clients more trust and makes the client happy.</p>
        </div>
    </div>
</section>


    <footer>
        <div class="container">
            <p>Why our clients Love Us. A good reputation is more valuable than money. Taken together, they get another reason to love your clients. The client who does not value his own client gives up this opportunity, recreates, and strives to do great work. Do great work gives clients more trust and makes the client happy.</p>
            <ul class="footer-menu">
                <li><a href="#">Careate</a></li>
                <li><a href="#">Marble</a></li>
                <li><a href="#">Product 3</a></li>
                <li><a href="#">Product 4</a></li>
                <li><a href="#">Product 5</a></li>
            </ul>
            <div class="social-icons">
                <a href="#"><img src="C:/Users/91638/Downloads/th.jpg" alt="Facebook"></a>
                <a href="#"><img src="C:/Users/91638/Downloads/th.jpg" alt="Instagram"></a>
                <a href="#"><img src="C:/Users/91638/Downloads/th.jpg" alt="Twitter"></a>
            </div>
        </div>
    </footer>
    <script>
        document.querySelectorAll('.faq-item').forEach(item => {
        item.addEventListener('click', () => {
        const answer = item.querySelector('.faq-answer');
        const symbol = item.querySelector('.toggle-symbol');

        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            symbol.textContent = '+';
        } else {
            answer.style.display = 'block';
            symbol.textContent = '-';
        }
    });
});

    </script>
</body>
</html>
