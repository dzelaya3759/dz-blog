import React from 'react';
import './App.css';
import Card from './components/card';
import Article from './components/article'
import Navbar from './components/navbar'
import Footer from './components/footer'

function App() {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <div class="container">
        <h1 class="section-title">Recent Photos (6)</h1>
        
        <Card/>
    
       
        <h1 class="section-title"> <Article/> </h1>
        <ul class="cards">
          <li class="cards-item half">
            <div class="card">
              <div class="card-content">
                <div class="card-image landscape"></div>
                <div class="card-container">
                  <div class="card-title">Pop-up gochujang artisan activated charcoal bushwick irony raclette</div>
                  <p class="card-text">Listicle hexagon helvetica tumeric shabby chic cloud bread XOXO four loko umami crucifix hoodie forage bushwick. Mlkshk cliche everyday carry sartorial truffaut portland prism four loko cronut. Tousled locavore tote bag food truck blue bottle shaman...</p>
                  <div class="btn-block">
                    <button class="btn third">
                      <span role="img" aria-label="Add to Album">➕</span>
                    </button>
                    <button class="btn third">
                      <span role="img" aria-label="Email">✉️</span>
                    </button>
                    <button class="btn third">
                      <span role="img" aria-label="Favorite">⭐</span>
                    </button>
                  </div>
                </div>
                <div class="btn-block">
                  <button class="btn full">
                    <span role="img" aria-label="Comment">💬</span> 
                    <span class="small">[100]</span>
                  </button>
                </div>
              </div>
            </div>
          </li>
         <Article/>
          <li class="cards-item half">
            <div class="card">
              <div class="card-content">
                <div class="card-image landscape"></div>
                <div class="card-container">
                  <div class="card-title"><Card/></div>
                  <p class="card-text">Listicle hexagon helvetica tumeric shabby chic cloud bread XOXO four loko umami crucifix hoodie forage bushwick. Mlkshk cliche everyday carry sartorial truffaut portland prism four loko cronut. Tousled locavore tote bag food truck blue bottle shaman...</p>
                  <div class="btn-block">
                    <button class="btn third">
                      <span role="img" aria-label="Add to Album">➕</span>
                    </button>
                    <button class="btn third">
                      <span role="img" aria-label="Email">✉️</span>
                    </button>
                    <button class="btn third">
                      <span role="img" aria-label="Favorite">⭐</span>
                    </button>
                  </div>
                </div>
                <div class="btn-block">
                  <button class="btn full">
                    <span role="img" aria-label="Comment">💬</span> 
                    <span class="small">[100]</span>
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <h1 class="section-title">Recent Comments (5)</h1>
        <ul class="cards">
          <li class="cards-item third">
            <div class="card">
              <div class="card-content">
                <div class="card-container">
                  <p class="card-text">Put a bird on it disrupt flexitarian, keffiyeh man braid 3 wolf moon shoreditch seitan ethical DIY quinoa shaman sustainable pitchfork...</p>
                  <div class="btn-block">
                    <button class="btn third">
                      <span role="img" aria-label="Add to Album">➕</span>
                    </button>
                    <button class="btn third">
                      <span role="img" aria-label="Email">✉️</span>
                    </button>
                    <button class="btn third">
                      <span role="img" aria-label="Favorite">⭐</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="cards-item third">
            <div class="card">
              <div class="card-content">
                <div class="card-container">
                  <p class="card-text">Put a bird on it disrupt flexitarian, keffiyeh man braid 3 wolf moon shoreditch seitan ethical DIY quinoa shaman sustainable pitchfork...</p>
                  <div class="btn-block">
                    <button class="btn third">
                      <span role="img" aria-label="Add to Album">➕</span>
                    </button>
                    <button class="btn third">
                      <span role="img" aria-label="Email">✉️</span>
                    </button>
                    <button class="btn third">
                      <span role="img" aria-label="Favorite">⭐</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="cards-item third">
            <div class="card">
              <div class="card-content">
                <div class="card-container">
                  <p class="card-text">Put a bird on it disrupt flexitarian, keffiyeh man braid 3 wolf moon shoreditch seitan ethical DIY quinoa shaman sustainable pitchfork...</p>
                  <div class="btn-block">
                    <button class="btn third">
                      <span role="img" aria-label="Add to Album">➕</span>
                    </button>
                    <button class="btn third">
                      <span role="img" aria-label="Email">✉️</span>
                    </button>
                    <button class="btn third">
                      <span role="img" aria-label="Favorite">⭐</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="cards-item third">
            <div class="card">
              <div class="card-content">
                <div class="card-container">
                  <p class="card-text">Put a bird on it disrupt flexitarian, keffiyeh man braid 3 wolf moon shoreditch seitan ethical DIY quinoa shaman sustainable pitchfork...</p>
                  <div class="btn-block">
                    <button class="btn third">
                      <span role="img" aria-label="Add to Album">➕</span>
                    </button>
                    <button class="btn third">
                      <span role="img" aria-label="Email">✉️</span>
                    </button>
                    <button class="btn third">
                      <span role="img" aria-label="Favorite">⭐</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="cards-item third">
            <div class="card">
              <div class="card-content">
                <div class="card-container">
                  <p class="card-text">Put a bird on it disrupt flexitarian, keffiyeh man braid 3 wolf moon shoreditch seitan ethical DIY quinoa shaman sustainable pitchfork...</p>
                  <div class="btn-block">
                    <button class="btn third">
                      <span role="img" aria-label="Add to Album">➕</span>
                    </button>
                    <button class="btn third">
                      <span role="img" aria-label="Email">✉️</span>
                    </button>
                    <button class="btn third">
                      <span role="img" aria-label="Favorite">⭐</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <footer>
       <Footer/>
      </footer>
    </div>
  );
}

export default App;


