import React , { Component } from 'react';
import Sortable from 'sortablejs';
import './index.css'


class SolutionIndex extends Component {

  componentDidMount(){
    this.draftSort();
  }

  draftSort = () =>{
    var el = document.getElementById('items');
    var sortable = new Sortable(el, {
      handle: ".handle-icon",
      ghostClass: 'shadow-class',
      onEnd: function (evt) {
        var itemEl = evt.item;  // dragged HTMLElement
        console.log('itemEl:',itemEl)
        console.log('evt:',evt)
        console.log('evt.to:',evt.to)
        console.log('evt.clone:',evt.clone)
        // evt.to;    // target list
        // evt.from;  // previous list
        // evt.oldIndex;  // element's old index within old parent
        // evt.newIndex;  // element's new index within new parent
        // evt.oldDraggableIndex; // element's old index within old parent, only counting draggable elements
        // evt.newDraggableIndex; // element's new index within new parent, only counting draggable elements
        // evt.clone // the clone element
        // evt.pullMode;  // when item is in another sortable: `"clone"` if cloning, `true` if moving
      },
    })
  }

    render(){
      return (
        <>
          <h1>拖拽Demo</h1>
          <ul id="items" className='container'> 
            <li><span className='handle-icon'>♣</span>&nbsp;&nbsp;&nbsp; item 1</li>
            <li><span className='handle-icon'>♣</span>&nbsp;&nbsp;&nbsp; item 2</li>
            <li><span className='handle-icon'>♣</span>&nbsp;&nbsp;&nbsp; item 3</li>
            <li><span className='handle-icon'>♣</span>&nbsp;&nbsp;&nbsp; item 4</li>
            <li><span className='handle-icon'>♣</span>&nbsp;&nbsp;&nbsp; item 5</li>
          </ul>
        </>
      );
    }
}

export default SolutionIndex