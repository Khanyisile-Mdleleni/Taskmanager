import React, { useState } from 'react';
import './Notes.scss';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const handleInputChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleAddNote = () => {
    if (newNote.trim() !== '') {
      setNotes([...notes, newNote]);
      setNewNote('');
    }
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  const handleEditNote = (index) => {
    setEditingIndex(index);
    setNewNote(notes[index]);
  };

  const handleSaveNote = () => {
    if (newNote.trim() !== '') {
      const updatedNotes = [...notes];
      updatedNotes[editingIndex] = newNote;
      setNotes(updatedNotes);
      setEditingIndex(null);
      setNewNote('');
    }
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
    setNewNote('');
  };

  return (
    <div className="notes-container">
      <h2>Notes</h2>
      <div className="notes">
        {notes.map((note, index) => (
          <div className="note" key={index}>
            {editingIndex === index ? (
              <>
                <input type="text" value={newNote} onChange={handleInputChange} />
                <div className="note-buttons">
                  <button onClick={handleSaveNote}>Save</button>
                  <button onClick={handleCancelEdit}>Cancel</button>
                </div>
              </>
            ) : (
              <>
                <p>{note}</p>
                <div className="note-buttons">
                  <button onClick={() => handleEditNote(index)}>Edit</button>
                  <button onClick={() => handleDeleteNote(index)}>Delete</button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="add-note">
        <input
          type="text"
          placeholder="Add a note"
          value={newNote}
          onChange={handleInputChange}
        />
        <button onClick={handleAddNote}>Add</button>
      </div>
    </div>
  );
};

export default Notes;