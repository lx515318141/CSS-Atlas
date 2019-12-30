imageInput.onchange = function(e) {
  let formData = new FormData();
  formData.append('xxx',e.target.files[0])
  $.ajax({
      url: 'xxx',
      data: formData,
      processData: false,
      contentType: false,
      type: 'POST',
    })
    e.target
};
