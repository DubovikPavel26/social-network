import React from 'react';
import './App.css';

function App() {
  return (
    <div className={'app-wrapper'}>
     <header className={'header'}>
         <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fru.m.wikipedia.org%2Fwiki%2F%25D0%25A4%25D0%25B0%25D0%25B9%25D0%25BB%3ASVG_Logo.svg&psig=AOvVaw1FPYP4rb3kgFWxc-iWYR26&ust=1692014235254000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCICkt63K2YADFQAAAAAdAAAAABAE" alt="logo"/>
     </header>

        <nav className={'nav'}>
            <div><a href="#">Profile</a></div>
            <div><a href="#">Messanges</a></div>
            <div><a href="#">News</a></div>
            <div><a href="#">Music</a></div>
            <div><a href="#">Settings</a></div>
        </nav>

        <div className={'content'}>
            <div>
                <img src='https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/advice/maps-satellite-images/satellite-image-of-globe.jpg' alt='content'/>
            </div>


            <div>
                <img src="https://imagekit.io/blog/content/images/2019/12/image-optimization.jpg" alt="logo"/>
                descr
            </div>

            <div>
                My post
                <div>New post</div>
                <div>
                    <div>post 1</div>
                    <div>post 2</div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
