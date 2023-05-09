import  ReactMarkdown  from "react-markdown";

function Main({ activeNote, onUpdateNote }) {

    const onEditfield = (key, value) => {

        onUpdateNote({
            ...activeNote,

            [key]: value,

            lastModified: Date.now(),
        });
    };

    if(!activeNote) return <div className="no-active-note">No note selected</div>

    return (
      <div className="app-main">
        <div className="app-main-note-edit">
          <input type="text" id="title" value={activeNote.title} onChange={(e)=>  onEditfield("title", e.target.value) } autoFocus></input>
          <textarea id="body" placeholder="write your note here ..."value={activeNote.body } onChange={(e)=>  onEditfield("body", e.target.value)} ></textarea>
        </div>
        <div className="app-main-note-preview">
          <h1 className="preview-title">{activeNote.title}</h1>
          <ReactMarkdown className="markdown-preview">{activeNote.body}</ReactMarkdown>
        </div>
      </div>
    );
  }
  
  export default Main;
  