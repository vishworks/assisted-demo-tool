import React, { Component } from 'react';
import {
  SortableContainer,
  SortableElement,
  SortableHandle
} from 'react-sortable-hoc';

import './HighlightList.css';

const SortHandle = SortableHandle(() => (
  <i className="sort-handle fa fa-ellipsis-v" />
));

const SortableItem = SortableElement(
  ({ title, text, starred, onClickStar }) => {
    let starIconClass = starred
      ? 'star-icon active fa fa-star'
      : 'star-icon fa fa-star-o';

    return (
      <div className="HighlightListItem">
        <div className="title-label">
          {title}
          <i
            className={starIconClass}
            aria-hidden="true"
            onClick={onClickStar}
          />
        </div>
        <div className="text-label">{text}</div>
        <SortHandle />
      </div>
    );
  }
);

const SortableList = SortableContainer(({ items, toggleHighlightStar }) => {
  return (
    <div className="HighlightList">
      {items &&
        items.map((hl, index) => (
          <SortableItem
            key={`item-${index}`}
            index={index}
            title={hl.title}
            text={hl.text}
            starred={hl.starred}
            onClickStar={ev => toggleHighlightStar(index)}
          />
        ))}
    </div>
  );
});

class HighlightList extends Component {
  render() {
    return (
      <SortableList
        items={this.props.highlights}
        toggleHighlightStar={this.props.toggleHighlightStar}
        onSortEnd={this.onSortEnd}
        lockAxis
        useDragHandle={true}
      />
    );
  }
  onSortEnd = ({ oldIndex, newIndex }) => {
    this.props.swapHighlights(oldIndex, newIndex);
  };
}
export default HighlightList;
