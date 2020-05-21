import React from 'react';
import './collection-preview.styles.scss';
import '../collection-item/collection-item.component';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({title, items}) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items
                    .filter((_, index) => index < 4)
                    .map(({id, name, imageUrl, price}) => (
                        <CollectionItem 
                            key={id}
                            id={id}
                            name={name}
                            imageUrl={imageUrl}
                            price={price}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default CollectionPreview;
