function attachAdminListeners() {
  var addClassId,
      filmsCounter = 0,
      soundsCounter = 0,
      stillsCounter = 0;

  $('.new').on('click', makeAddRow)
  $('.edit').on('click', editToUpdateRow)
  $('.delete').on('click', deleteInstance)

  function makeTheCallTony(data, method) {
    $.ajax({
      url: "/" + $(event.target).attr('data-controller'),
      dataType: 'json',
      data: data,
      method: method
    }).done(function() {
      location.reload();
    });
  }

  function makeAddRow() {
    if ($(event.target).attr('data-controller') == 'films') {
      addClassId = 'film' + filmsCounter;
      filmsCounter++;
    } else if ($(event.target).attr('data-controller') == 'sounds') {
      addClassId = 'sound' + soundsCounter;
      soundsCounter++;
    } else if ($(event.target).attr('data-controller') == 'stills') {
      addClassId = 'still' + stillsCounter;
      stillsCounter++;
    } else {
      alert('wtf something broke');
    }

    var $title = $('<td>').html($('<input>').attr('id', addClassId + 'new-title'));
    var $shortDescription = $('<td>').html($('<textarea>').attr('id', addClassId + 'new-short-description'));
    var $url = $('<td>').html($('<input>').attr('id', addClassId + 'new-url'));
    
    var $saveBtn = $('<button>').attr('class', 'save');
    $saveBtn.attr('data-instance', addClassId);
    $saveBtn.attr('data-controller', $(event.target).attr('data-controller'));
    $saveBtn.on('click', addInstance);
    $saveBtn.text('save');
    var $save = $('<td>').html($saveBtn);
    
    var $cancelBtn = $('<button>').attr('class', 'cancel-add');
    $cancelBtn.on('click', cancelAdd);
    $cancelBtn.text('cancel');
    var $cancel = $('<td>').html($cancelBtn);

    $row = $('<tr>').append($title, $shortDescription, $url, $save, $cancel);
    $($(event.target).parents()[1]).before($row);
  }

  function cancelAdd() {
    $($(event.target).parents()[1]).detach();
  }

  function addInstance() {
    var id = $(event.target).attr('data-instance');
    var data = {
      title: $('#' + id + 'new-title').val(),
      short_description: $('#' + id + 'new-short-description').val(),
      url: $('#' + id + 'new-url').val()
    };
    makeTheCallTony(data, 'POST');
  }

  function editToUpdateRow() {
    var id, $els, text, type;
    id = $(event.target).attr('data-instance');
    els = ['title', 'short-description', 'url'];
    $.each(els, function(i, el) {
      $el = $('#' + id + '-' + el);
      type = (i === 1)? '<textarea>' : '<input>';
      $el.html($(type).val($el.text()));
    });
    $edit = $('#' + id + '-edit .edit');
    $edit.attr('class', 'update');
    $edit.text('save');
    $edit.off('click', editToUpdate);
    $edit.on('click', updateInstance);
    $del = $('#' + id + '-delete .delete');
    $del.attr('class', 'cancel-edit');
    $del.text('cancel');
    $del.off('click', deleteInstance);
    $del.on('click', cancelEdit);
  }

  function cancelEdit() {
    var id, $els, text, type;
    id = $(event.target).attr('data-instance');
    var fields = ['title', 'short-description', 'url'];
    $.each(fields, function(i, el) {
      $el = $('#' + id + '-' + el);
      $el.text($el.children().val());
    });
    $edit = $('#' + id + '-edit .update');
    $edit.attr('class', 'edit');
    $edit.text('edit');
    $edit.off('click', updateInstance);
    $edit.on('click', editToUpdate);
    $del = $('#' + id + '-delete .cancel-edit');
    $del.attr('class', 'delete');
    $del.text('delete');
    $del.off('click', cancelEdit);
    $del.on('click', deleteInstance);
  }

  function updateInstance() {
    var id = $(event.target).attr('data-instance');
    var data = {
      id: id.slice(2),
      title: $('#' + id + '-title').children().val(),
      short_description: $('#' + id + '-short-description').children().val(),
      url: $('#' + id + '-url').children().val()
    };
    makeTheCallTony(data, 'PUT');
  }

  function deleteInstance() {
    var data = {
      id: $(event.target).attr('data-instance').slice(2)
    };
    makeTheCallTony(data, 'DELETE');
  }
}
