import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route, Navigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NewNote from './components/NewNote';
import { useLocalStorage } from './hooks/useLocalStorage';
export type Note = {
  id: string;
} & NoteData;
export type RawNote = {
  id: string;
};
export type RawNoteData = {
  title: string;
  markdown: string;
  tagsId: string[];
};
export type Tag = {
  id: string;
  label: string;
};
export type NoteData = {
  title: string;
  markdown: string;
  tags: Tag[];
};

const App = () => {
  const [note, setNote] = useLocalStorage<RawNote[]>('Notes', []);
  const [tags, setTags] = useLocalStorage<Tag[]>('Tags', []);
  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/new" element={<NewNote />} />
        <Route path="/:id">
          <Route index element={<h1>show</h1>} />
          <Route path="edit" element={<h1>Edit</h1>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
};

export default App;
