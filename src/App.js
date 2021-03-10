import React from 'react';
import './App.css';
import Button from './assets/components/Button.js';
import Article from './assets/components/Article.js';
import Tile from './assets/components/Tile';
import bag1 from './assets/bag_1.png' ;
import bag2 from './assets/bag_2.png'  ;
import bag3 from './assets/bag_3.png' ;
import bag4 from './assets/bag_4.png' ;
import brand from './assets/brand.png' ;
import our_story from './assets/our_story.png' ;





function App() {
    return (
        <>

            <h1>Handbags & Purses</h1>

            <nav>
                <Button name="to the collection" disabled={false}/>
                <Button name="naar de shop" disabled={false}/>
                <Button name="pre-order" disabled={true}/>
            </nav>
            <main>
                <Article source={bag1} bagName="The handy Bag" price="400"/>
                <Article source={bag2} bagName="The stylish bag" price="250"/>
                <Article source={bag3} bagName="The simple bag" price="300"/>
                <Article source={bag4} bagName="The trendy Bag" price="150"/>
            </main>

            <footer>
                <Tile title=" the brand "><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dignissimos ex ipsam iusto optio quaerat rem, saepe sequi tenetur voluptatum.    </p> <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur corporis doloribus illo iste labore, nesciunt officiis. Accusamus ea excepturi incidunt?</p></Tile>
                <Tile image ={brand}/>
                <Tile image = {our_story}/>
                <Tile title="our STory ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam fugiat fugit minima perferendis veniam! Ipsam minus, perferendis. Fugit, modi, tenetur? </Tile>

            </footer>




        </>
    );
}


export default App;



