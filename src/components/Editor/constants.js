import Embed from '@editorjs/embed';
import Table from '@editorjs/table';
import List from '@editorjs/list';
import Warning from '@editorjs/warning';
import Code from '@editorjs/code';
import LinkTool from '@editorjs/link';
import Image from '@editorjs/image';
import Raw from '@editorjs/raw';
import Header from '@editorjs/header';
import Quote from '@editorjs/quote';
import Marker from '@editorjs/marker';
import CheckList from '@editorjs/checklist';
import Delimiter from '@editorjs/delimiter';
import InlineCode from '@editorjs/inline-code';
import SimpleImage from '@editorjs/simple-image';

import { uploadByFile } from '../../utils/editorUploaders';

export const EDITOR_JS_TOOLS = {
  embed: Embed,
  table: Table,
  marker: Marker,
  list: List,
  warning: Warning,
  code: Code,
  linkTool: LinkTool,
  image: {
    class: Image,
    config: {
      uploader: {
        uploadByFile,
      },
    },
  },
  raw: Raw,
  header: Header,
  quote: Quote,
  checklist: CheckList,
  delimiter: Delimiter,
  inlineCode: InlineCode,
  simpleImage: SimpleImage,
};

// npm i -D react-editor-js @editorjs/editorjs @editorjs/paragraph @editorjs/embed @editorjs/table @editorjs/list @editorjs/warning @editorjs/code @editorjs/link @editorjs/image @editorjs/raw @editorjs/header @editorjs/quote @editorjs/marker @editorjs/checklist @editorjs/delimiter @editorjs/inline-code @editorjs/simple-image
