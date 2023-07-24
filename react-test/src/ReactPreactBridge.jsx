import React, { useRef, useEffect } from "react";
import { h, render } from 'preact';
import TestComponent from '../../shared-component/dist/shared-component';

//https://stackoverflow.com/questions/60907068/how-to-include-preact-component-with-hooks-in-react-app

const ReactPreactBridge = () => {
    // Get the raw DOM node to render into
    const ref = useRef(null)
  
    useEffect(() => {
      if (ref.current) {
        // Can't use two different JSX constructors in
        // the same file, so we're writing the JSX output
        // manually. (h is the same as createElement)
        render(h(TestComponent, null), ref.current)
      }
  
      return () => {
        // Clear Preact rendered tree when the parent React
        // component unmounts
        render(null, ref.current);
      }
    }, [ref.current]);
  
    return <div ref={ref} />
  }
export default ReactPreactBridge;