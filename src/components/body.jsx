import React, { useState } from "react";
import cat1 from './images/cat.jfif';
import cat2 from './images/cat2.jfif';
import cat3 from './images/cat3.jfif';
import cat4 from './images/cat4.jfif';
import cat5 from './images/cat5.jfif';
import cat6 from './images/cat6.jfif';

function randomize(arr){

    let i = 0;
    let temparr = [];
    let arrCheck = [];
    
    for(let i = 0; i < arr.length; i++){
        arrCheck.push(0);
    }

    while(i < arr.length){
        let randomValue = Math.floor(Math.random()*arr.length);
        if(arrCheck[randomValue] === 0){
            arrCheck[randomValue] = 1;
            temparr.push(arr[randomValue]);
            i++;
        }
    }    
    return temparr;
}

export default function Body(props){


    let cardDetails = [{id:0 ,name: 'Lussy', url: cat1}, {id:2 ,name: 'Susse', url: cat2}, {id:3 ,name: 'Fussee', url: cat3}, {id:4 ,name: 'Dussy', url: cat4}, {id:5 ,name: 'Lussya', url: cat5}, {id:1 ,name: 'Lussy', url: cat6}];
    
    cardDetails = randomize(cardDetails);
    const [reset, setReset] = useState([]);
    
    function handleSetReset(name){
       
        if(reset.includes(name)){

            props.gameOver();

        }else{

            setReset([...reset, name])
            props.increase();

        }

    }

    return <div className="bodyDiv grid primaryContainer">
        {cardDetails.map((val)=><Card key={val.url} name={val.name} imgUrl={val.url} handleSetReset={handleSetReset} />)}
    </div>

}

function Card({name, imgUrl, handleSetReset}){

    return <div className="Card" onClick={()=>{
        
        handleSetReset(imgUrl);

    }}>
        <div className="image">
            <img src={imgUrl} alt="img" />
        </div>
        <h2>{name}</h2>
    </div>

}