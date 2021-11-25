import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Sonic']);
    
    // const handleHand = () => {
    //     //setCategories( [...categories, 'Power Ranger'] );
    //     setCategories( catgs => [ ...categories, 'PowerRanger Red'] );
    // }


    return (
        <>

            <h2 className="titulo animate__animated animate__fadeIn" ><a href="#">FindYourGif</a></h2>
            <AddCategory setCategories={ setCategories } />
            <hr />
            <br/>

            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                        key={ category }
                        category={ category } />
                    ))
                }
            </ol>

        </>
    );
};