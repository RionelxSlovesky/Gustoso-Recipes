import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './ChefCard.css'
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const ChefCard = ({ chef }) => {

    const {id, img, name, experience, recipe_quant, likes} = chef;

    return (
        <div className="card" style={{width: "18rem"}}>
            <img className="chef-img" src={img} alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <div className='text-secondary'>
                <p className='mb-0'>Experience: {experience}</p>
                <p className='mb-0'>Recipes: {recipe_quant}</p>
                <p className='mb-4'>Likes: {likes}</p>
            </div>
            <div className='text-center'>
                <Link to={`/chef/${chef.id}`}><Button variant='warning'>View Chef Recipes</Button></Link>
            </div>
            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>
    );
};

export default ChefCard;