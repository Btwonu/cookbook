// Import React dependencies.
import { useEffect, useMemo, useState, useCallback } from 'react';
// Import the Slate editor factory.
import { createEditor, Editor, Transforms, Text } from 'slate';

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react';

import Layout from './layouts/Layout';

const CodeElement = ({ attributes, children }) => {
  return (
    <pre {...attributes}>
      <code>{children}</code>
    </pre>
  );
};

const AnchorElement = ({ element, attributes, children }) => {
  return (
    <a href={element.url} {...attributes}>
      {children}
    </a>
  );
};

const DefaultElement = (props) => {
  return <p {...props.attributes}>{props.children}</p>;
};

const Leaf = (props) => {
  return (
    <span
      {...props.attributes}
      style={{ fontWeight: props.leaf.bold ? 'bold' : 'normal' }}
    >
      {props.children}
    </span>
  );
};

const CreateRecipe = () => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraphss.' }],
    },
  ]);

  // fix error
  // useEffect(() => {
  //   editor.selection = {
  //     anchor: { path: [0, 0], offset: 0 },
  //     focus: { path: [0, 0], offset: 0 },
  //   };
  // }, []);

  // defines how blocks are rendered
  const renderElement = useCallback((props) => {
    console.log({ props });
    switch (props.element.type) {
      case 'code':
        return <CodeElement {...props} />;
      case 'link':
        return <AnchorElement {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  const renderLeaf = useCallback((props) => {
    return <Leaf {...props} />;
  }, []);

  const onKeyDownHandler = (e) => {
    if (!e.ctrlKey) return;

    switch (e.key) {
      case '`':
        {
          const [match] = Editor.nodes(editor, {
            match: (n) => n.type === 'code',
          });

          // Toggle the block type depending on whether there's already a match.
          Transforms.setNodes(
            editor,
            { type: match ? 'paragraph' : 'code' },
            { match: (n) => Editor.isBlock(editor, n) }
          );
        }
        break;

      case 'b':
        {
          e.preventDefault();
          Transforms.setNodes(
            editor,
            { bold: true },
            { match: (n) => Text.isText(n), split: true }
          );
        }
        break;

      default:
        break;
    }
  };

  return (
    <Layout>
      <Slate
        editor={editor}
        value={value}
        onChange={(newValue) => setValue(newValue)}
      >
        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          className="border p-2"
          onKeyDown={onKeyDownHandler}
        />
      </Slate>
    </Layout>
  );
};

export default CreateRecipe;
