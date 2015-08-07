function attachAdminListeners() {
  $('.new').on('click', logit)
  $('.edit').on('click', editToUpdate)
  $('.delete').on('click', deleteInstance)

  function logit() {
    console.log(event.target);
  }

  function addInstance() {
    $.ajax({
      url: "/" + $(event.target).attr('data-controller'),
      data: {

      },
      dataType: 'json',
      method: 'POST'
    })
  }

  function editToUpdate() {
    var id, $els, $title, $short_description, $url, text, type;
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
    $del.attr('class', 'cancel');
    $del.text('cancel');
    $del.off('click', deleteInstance);
    $del.on('click', cancelEdit);
    // amke the text area bigger with css
  }

  function cancelEdit() {
    var id, $els, $title, $short_description, $url, text, type;
    id = $(event.target).attr('data-instance');
    els = ['title', 'short-description', 'url'];
    $.each(els, function(i, el) {
      $el = $('#' + id + '-' + el);
      $el.text($el.children().val());
    });
    $edit = $('#' + id + '-edit .update');
    $edit.attr('class', 'edit');
    $edit.text('edit');
    $edit.off('click', updateInstance);
    $edit.on('click', editToUpdate);
    $del = $('#' + id + '-delete .cancel');
    $del.attr('class', 'delete');
    $del.text('delete');
    $del.off('click', cancelEdit);
    $del.on('click', deleteInstance);
  }

  function updateInstance() {
    logit();
    var id = $(event.target).attr('data-instance');
    $.ajax({
      url: "/" + $(event.target).attr('data-controller'),
      dataType: 'json',
      data: {
        id: id,
        title: $('#' + id + '-title').children().val(),
        short_description: $('#' + id + '-short-description').children().val(),
        url: $('#' + id + '-url').children().val()
      },
      method: 'PUT'
    }).done(function() {
      location.reload();
    });
  }

  function deleteInstance() {
    $.ajax({
      url: "/" + $(event.target).attr('data-controller'),
      dataType: 'json',
      data: {
        id: $(event.target).attr('data-instance')
      },
      method: 'DELETE'
    }).done(function() {
      location.reload();
    });
  }
}
