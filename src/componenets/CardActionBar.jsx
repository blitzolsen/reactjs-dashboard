import React from 'react'

export default function CardActionBar(props) {
  const {deleteWidget, index, title} = props;
  return (
    <div className='card-action-bar'>
        <h5>{title}</h5>
        <button className='btn btn-danger' onClick={() => deleteWidget(index)}><i className="bi bi-trash"></i></button>
    </div>
  )
}
