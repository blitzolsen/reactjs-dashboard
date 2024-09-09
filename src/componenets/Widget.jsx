import React from 'react'
import Card from 'react-bootstrap/Card';
import InfoWidget from './Widgets/InfoWidget';
import CardWidget from './Widgets/CardWidget';
import CardActionBar from './CardActionBar';
import GraphWidget from './Widgets/GraphWidget';
export default function Widget(props) {
  const {deleteWidget, index, type} = props;
    return (
      <Card>
      <CardActionBar deleteWidget={deleteWidget} index={index} title={type.toUpperCase()}/>
        <Card.Body>
          {(() => {
            switch (type) {
              case 'info':
                return <InfoWidget />;
              case 'card':
                return <CardWidget />;
              case 'graph':
                return <GraphWidget />;
              default:
                return null;
            }
          })()}
        </Card.Body>
      </Card>
    );
  }
