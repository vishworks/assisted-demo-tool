import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  SortableContainer,
  SortableElement,
  SortableHandle
} from 'react-sortable-hoc';

import { isoToLongDate } from 'helpers/DateUtils.js';

import './NotesList.css';

const SortHandle = SortableHandle(() => (
  <i className="sort-handle fa fa-ellipsis-v" />
));

const SortableItem = SortableElement(({ title, text, date, onClickStar }) => {
  return (
    <div className="NotesListItem">
      <div className="title-label">
        {title}
        <span className="date-label">{isoToLongDate(date)}</span>
      </div>
      <p className="text-label">{text}</p>
      <SortHandle />
    </div>
  );
});

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
        lockAxis="y"
        useDragHandle={true}
      />
    );
  }
  onSortEnd = ({ oldIndex, newIndex }) => {
    this.props.swapNotes(oldIndex, newIndex);
  };
}

const NotePropTypes = PropTypes.shape({
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
});

NotesList.propTypes = {
  swapNotes: PropTypes.func.isRequired,
  notes: PropTypes.arrayOf(NotePropTypes)
};

export default NotesList;
