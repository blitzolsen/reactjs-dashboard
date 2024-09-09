import React from 'react'
import { useState } from 'react';
import ActionBar from '../componenets/ActionBar'
import CardContainer from '../componenets/CardContainer'
import AddWidgetModal from '../componenets/AddWidgetModal'
import { useEffect, useRef } from 'react';
export default function WidgetsPage() {
  const [widgets, setWidgets] = useState([]);
  const [show, setShow] = useState(false);
  const isMounted = useRef(false);
  const deleteWidget = (index) => {
    setWidgets(widgets.filter((_, i) => i !== index));
  };
  const addWidget = () => {
    setShow(true);
  };
  const handleNewWidget = (widgetType) => {
    setWidgets([...widgets, widgetType]);
  };
  const persistWidgets = () => {
    localStorage.setItem('widgets', JSON.stringify(widgets));
    const storedWidgets = JSON.parse(localStorage.getItem('widgets'));
  };
  useEffect(() => {
    if (!localStorage) {
      return;
    }
    if (localStorage.getItem('widgets')) {
      try {
        const storedWidgets = JSON.parse(localStorage.getItem('widgets'));
        if (storedWidgets) {
          setWidgets(storedWidgets);
        }
      } catch (error) {
        console.error('Error retrieving widgets from localStorage:', error);
      }
    }
  }, []);
  useEffect(() => {
    if (isMounted.current) {
      persistWidgets();
    } else {
      isMounted.current = true;
    }
  }, [widgets]);
  return (
    <>
      <ActionBar addWidget={addWidget} />
      <CardContainer widgets={widgets} deleteWidget={deleteWidget} />
      <AddWidgetModal show={show} setShow={setShow} handleNewWidget={handleNewWidget} />
    </>
  )
}
