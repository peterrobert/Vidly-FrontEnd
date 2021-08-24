import React from 'react';
const Movie = ({title, genre, stock, rate, id , removeMovie}) => {

    return ( 
        <tr>
            <td>
                {title}
            </td>
            <td>
                {genre}
            </td>
            <td>
                {stock}
            </td>

            <td>
                {rate}
            </td>

            <td>
               <button className="btn btn-danger"  onClick ={() => removeMovie(id)}>Delete</button>
            </td>
        </tr>
     );
}
 
export default Movie;