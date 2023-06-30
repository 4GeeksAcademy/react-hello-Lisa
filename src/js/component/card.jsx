import React from "react";


const Card = () => {
    return (
<div class='container'>
    <div class='row'>
        <div class='col order-first card g-3'>
            <div class='bg-secondary'>500 x 325</div>
            <div class= 'card-body bg-white'>
                <h5 class='card-title'>Card Title</h5>
                <p class='card-text'>This is the first card</p>
            </div>
            <div class='card-footer bg-light'>
                <a href='#' class='btn btn-primary'>Find out more !</a>
            </div>
        </div>
       <div class='col unordered card ms-2 g-3'>
        <div class='bg-secondary'>500 x 325</div>
        <div class='card-body bg-white'>
            <h5 class='card-title'>Card Title</h5>
            <p class='card-text'> This is the second card</p>  
        </div>
        <div class='card-footer bg-light'>
            <a href='#' class='btn btn-primary'>Fin Out more!</a>
        </div>
        
       </div>
       <div class='col unordered card ms-2 g-3'>
        <div class='bg-secondary'> 500 x 325</div>
        <div class='card-body bg-white'>
            <h5 class='card-title'>Card Title</h5>
            <p class='card-text'>This is the third cad</p>
        </div>
        <div class='card-footer bg-light'>
            <a href='#' class='btn btn-primary'>Find Out More!</a>
        </div>
       </div>
       <div class='col order-last card ms-2 g-3'>
        <div class='bg-secondary'>500 x 325</div>
        <div class='card-body bg-white'>
            <h5 class='card-title'>Card Title</h5>
            <p class='card-text'>This is the fourth card</p>
        </div>
        <div class='card-footer bg-light'>
            <a href='#' class='btn btn-primary'>Find Out More!</a>
        </div>
       </div>
    </div>
</div>
    );
}

export default Card