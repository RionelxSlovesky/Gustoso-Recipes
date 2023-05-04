import React from 'react';
import Table from 'react-bootstrap/Table';

const RecipesTable = ({ recipes }) => {
    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Ingredients</th>
                    <th>Cooking Method</th>
                    <th>Ratings</th>
                </tr>
            </thead>
            <tbody>
                {
                    recipes.map(recipe =>
                        <tr key={recipe.id}>
                            <td>{recipe.name}</td>
                            <td>{recipe.ingredients}</td>
                            <td>{recipe.cooking_method}</td>
                            <td>{recipe.rating}</td>

                        </tr>)
                }

            </tbody>
        </Table>
    );
};

export default RecipesTable;