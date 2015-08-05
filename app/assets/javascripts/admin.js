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
    $title = $('#'+id+'-title');
    $short_description = $('#'+id+'-short-description');
    $url = $('#'+id+'-url');
    $els = [$title, $short_description, $url];
    $.each($els, function(i, $el) {
      text = $el.text();
      $el.text('');
      if (i == 1) {
        type = '<textarea>';
      } else {
        type = '<input>';
      }
        $el.append($(type).val(text));
    });
    // change the edit button to save and delete to cancel
    // maybe use colors for them
    // amke the text area bigger with css
  }

  function updateInstance() {
    $.ajax({
      url: "/" + $(event.target).attr('data-controller'),
      dataType: 'json',
      data: {
        id: $(event.target).attr('data-instance')

      },
      method: 'PUT'
    })
  }

  function deleteInstance() {
    $.ajax({
      url: "/" + $(event.target).attr('data-controller'),
      dataType: 'json',
      data: {
        id: $(event.target).attr('data-instance')
      },
      method: 'DELETE'
    })
  }
}