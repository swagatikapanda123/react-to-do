import React from 'react';
import './ListItems.css';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';


function ListItems(props) {
    const items = props.items;
    const listItems = items.map( item => {
        return <div className="list" key={item.key}>
            <p> 
                {item.text}
                 <IconButton 
                    className="delete_btn">< DeleteIcon 
                    onClick={ () => props.deleteItem(item.key)
                    }/>
                </IconButton>
            </p>
        
        </div>
    })
    return(
        <div> {listItems} </div>
    )
}

export default ListItems
