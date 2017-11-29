import React, { Component } from 'react';
import { map } from 'lodash';
import {
  SortableContainer,
  SortableElement,
  SortableHandle
} from 'react-sortable-hoc';

import './NotesList.css';

const SortHandle = SortableHandle(() => (
  <i className="sort-handle fa fa-ellipsis-v" />
));

const SortableItem = SortableElement(
  ({ title, text, starred, onClickStar }) => {
    return (
      <div className="NotesListItem">
        <div className="title-label">{title}</div>
        <div className="text-label">{text}</div>
        <SortHandle />
      </div>
    );
  }
);

const SortableList = SortableContainer(({ items }) => {
  return (
    <div className="NotesList">
      {items &&
        items.map((note, index) => (
          <SortableItem
            key={`item-${index}`}
            index={index}
            title={note.title}
            text={note.text}
            date={note.date}
          />
        ))}
    </div>
  );
});

class NotesList extends Component {
  render() {
    return (
      <SortableList
        items={this.props.notes}
        onSortEnd={this.onSortEnd}
        lockAxis
        useDragHandle={true}
      />
    );
  }
  onSortEnd = ({ oldIndex, newIndex }) => {
    this.props.swapNotes(oldIndex, newIndex);
  };
}
export default NotesList;
