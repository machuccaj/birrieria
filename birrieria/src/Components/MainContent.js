import React from 'react';
import { link } from 'react-router-dom';

const MainContent = () => {
    return (
        <main>
            <div className="main-content">
                {/* Add your main content here */}
                <img src="some jpg address" alt='Birria Bowl'/>
                <h1>The best birria in México</h1>
                <p>Experience the rich flavors of traditional Mexican cuisine.</p>
                <div className='cta-buttons'>
                    <Link to="/order" className="button">Order Now</Link>
                    <Link to="/menu" className="button">View Menu</Link>
                </div>
            </div>
        </main>
    );
};

export default MainContent;