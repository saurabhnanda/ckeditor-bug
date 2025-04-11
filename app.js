import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

// Core functionality
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Undo from '@ckeditor/ckeditor5-undo/src/undo';

// Basic styles
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Link from '@ckeditor/ckeditor5-link/src/link';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';

// Lists and alignment
import List from '@ckeditor/ckeditor5-list/src/list';
// import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
// import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';

// Special features
// import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters';
// import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials';
// import SourceEditing from '@ckeditor/ckeditor5-source-editing/src/sourceediting';
// import Emoji from '@ckeditor/ckeditor5-emoji/src/emoji';
// import Mention from '@ckeditor/ckeditor5-mention/src/mention';

// Support for arbitrary HTML, styles, classes
// import HtmlSupport from '@ckeditor/ckeditor5-html-support/src/generalhtmlsupport';

// Style dropdown (custom block styles)
// import Style from '@ckeditor/ckeditor5-style/src/style';

// Image
// import Image from '@ckeditor/ckeditor5-image/src/image';
// import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
// import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
// import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert';
// import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
// import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
// import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';

// Table
// import Table from '@ckeditor/ckeditor5-table/src/table';
// import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
// import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
// import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';

// Remove Format
// import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';


export default class CustomEditor extends ClassicEditorBase {}

CustomEditor.builtinPlugins = [
  Essentials,
  Paragraph,
  Heading,
  // Undo,
  Bold,
  Italic,
  Underline,
  Link,
  BlockQuote,
  List,
  // Alignment,
  // Autoformat,
  // SpecialCharacters,
  // SpecialCharactersEssentials,
  // Emoji,
  // SourceEditing,
  // HtmlSupport,
  // Style,
  // Mention,
  // Image,
  // ImageToolbar,
  // ImageUpload,
  // ImageInsert,
  // ImageCaption,
  // ImageStyle,
  // ImageResize,
  // Table,
  // TableToolbar,
  // TableProperties,
  // TableCellProperties,
  // RemoveFormat
];


CustomEditor.defaultConfig = {
  toolbar: {
    items: [
      // First row
      // 'undo', 'redo', '|',
      'findAndReplace', 'selectAll', '|',
      'link', 'blockQuote', '|',
      'imageInsert', 'insertTable', 'horizontalLine', '|',
      'sourceEditing', '|',

      // Second row
      'bold', 'italic', 'strikethrough', 'removeFormat', '|',
      'bulletedList', 'numberedList', 'outdent', 'indent', '|',
      'alignment', 'bidi', '|',
      'heading', 'style', 'fontColor', 'fontBackgroundColor', 'fontSize', '|',
      'specialCharacters', 'emoji'
    ],
    shouldNotGroupWhenFull: true // ⬅️ Makes it wrap into 2+ rows
  },
  language: 'en',
  licenseKey: 'GPL',
  emoji: {
     skinTone: 'medium'
  },
  heading: {
    options: [
      { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
      { model: 'heading1',  title: 'Heading 1', class: 'ck-heading_heading1' },
      { model: 'heading2',  title: 'Heading 2', class: 'ck-heading_heading2' },
      { model: 'heading3',  title: 'Heading 3', class: 'ck-heading_heading3' },
      { model: 'pre',       title: 'Preformatted', class: 'ck-heading_pre' } // if supported
    ]
  },
  // htmlSupport: {
  //   allow: [
  //     {
  //       name: /.*/,
  //       attributes: true,
  //       classes: true,
  //       styles: true
  //     }
  //   ]
  // },
  // htmlEmbed: {
  //   showPreviews: true
  // },
  // CKEditor 5 does not encode HTML entities by default unless needed.
  // So "entities = false" is mostly not required anymore.
};

