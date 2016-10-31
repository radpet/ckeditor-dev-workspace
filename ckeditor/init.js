'use strict';

(function () {
  var editor;

  var initEditor = function(){
    var toolbarConfig = [[
      'Format', ' ', 'Font', ' ', 'FontSize', ' ',
      'Undo', 'Redo', '-',
      'Clipboard', '-',
      'Bold', 'Italic', 'TextStyle', '-', 'SimpleCheckBox',
      'TextColor', 'BGColor', '-',
      'NumberedList', 'BulletedList', 'HorizontalRule', 'Blockquote', 'Justify', '-',
      'Image', 'Table', 'SpecialChar', 'Info', '-',
      'AddLayout', '-',
      'Link', 'Replace']];

    var extraPlugins = '';
    var removePlugins = '';

    editor = CKEDITOR.replace('editor', {
      allowedContent: true,
      pasteFromWordRemoveStyles: false,
      pasteFromWordRemoveFontStyles: false,
      removePlugins: removePlugins,
      extraPlugins: extraPlugins,
      toolbar: toolbarConfig,
      autoParagraph: false,
      qtWidth: '95%'
    });
  };

  initEditor();

  var destroyEditor = function(){
    editor.destroy();
  };

  $('#destroy-init').click(function(){
    destroyEditor();
    initEditor();
  });

})();