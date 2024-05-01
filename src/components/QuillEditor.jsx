import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';

const MyQuillEditor = () => {
  const [content, setContent] = useState('');

  const handleChange = (value) => {
    setContent(value);
  };

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ align: [] }],
        ['code-block'],
        ['link', 'image', 'video'],
        [{ color: [] }, { background: [] }],
        [{ list: 'bullet' }, { list: 'ordered' }],
        ['blockquote', 'code-block'],

        [{ font: [] }],

        ['clean'],
      ],
    },
  };

  const formats = [
    'bold',
    'italic',
    'underline',
    'strike',
    'align',
    'link',
    'image',
    'video',
    'list',
    'bullet',
    'code-block',
    'header',
    'color',
    'background',
  ];

  return (
    <div>
      <ReactQuill
        theme="snow"
        value={content}
        modules={{ ...modules }}
        onChange={handleChange}
        formats={formats}
        className="bg-white h-[300px] p-0 m-0"
        placeholder="Write something..."
      />
    </div>
  );
};

export default MyQuillEditor;
