import React from 'react'
import Button from 'react-bootstrap/Button';

export default function ActionBar(props) {
  const {addWidget} = props;
  return (
    <div className='actionBarContainer'>
        <Button onClick={() => addWidget()}>Add Widget</Button>
    </div>
  )
}
