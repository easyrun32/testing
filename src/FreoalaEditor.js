import * as React from "react";
import { useEffect, useRef, useState } from "react";


// Require Editor JS files.
import "froala-editor/js/froala_editor.pkgd.min.js";
import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/js/third_party/embedly.min.js";
// import "froala-editor/js/plugins/fullscreen.min.js"

// Require Editor CSS files.
import './froala-editor/css/froala_style.min.css'
import "./froala-editor/css/froala_editor.pkgd.min.css";
import "./froala-editor/css/third_party/embedly.min.css";
// import "froala-editor/css/froala_style.min.css";
// import "froala-editor/css/froala_editor.pkgd.min.css";
// import "froala-editor/css/third_party/embedly.min.css";
// import "froala-editor/css/plugins/fullscreen.min.css";

import Froala from "react-froala-wysiwyg";
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";
import Tribute from "tributejs";
import "tributejs/dist/tribute.css";
import { options } from "./options.js";

export const FroalaEditor = () => {
  const ref = useRef({ editor: null });
  const [isFroalaInitialized, setIsFroalaInitialized] = useState(false);
  const tribute = new Tribute(options);
  const [editor, setEditor] = useState(undefined);
  const [model, setModel] = useState("");

  const handleModelChange = (model) => {
    setModel(model);
  };
  // this looks like its going undefined all the time
  // Editor initialization
//     useEffect(() => {
//     ref.current.editor.data._init = null;
//     setEditor(ref.current.editor);
//     editor && setIsFroalaInitialized(true);
   
//   }, [ref.current]);

  // Do after initialization
  useEffect(() => {
    if (isFroalaInitialized) {
      tribute.attach(editor.el);
      editor.html.set(model);
    }
  }, [isFroalaInitialized]);

  return (
    <div className="App">
      <Froala
        ref={ref}
        model={model}
        onModelChange={handleModelChange}
        tag="textarea"
        
      />
      <br />
      <strong>Read only editor:</strong>
      <FroalaEditorView model={model} />
    </div>
  );
};
export default FroalaEditor