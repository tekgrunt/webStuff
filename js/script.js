$(function() {
    $('#replicants').hover(function() {
      $('.replicants-desc').css('display', 'inline-block');
      $('#drrules').css('background-color', '#b4cddf');
      $('#edr').css('background-color', '#b4cddf');
      $('#retention').css('background-color', '#b4cddf');
      $('#logs').css('background-color', '#b4cddf');
    }, function() {
      $('.replicants-desc').css('display', '');
      $('#drrules').css('background-color', '');
      $('#edr').css('background-color', '');
      $('#retention').css('background-color', '');
      $('#logs').css('background-color', '');
    });
  });
  $(function() {
    $('#search').hover(function() {
      $('.search-desc').css('display', 'inline-block');
      $('#retention').css('background-color', '#b4cddf');
      $('#logs').css('background-color', '#b4cddf');
      $('#edr').css('background-color', '#b4cddf');
    }, function() {
      $('.search-desc').css('display', '');
      $('#retention').css('background-color', '');
      $('#logs').css('background-color', '');
      $('#edr').css('background-color', '');
    });
  });
  $(function() {
    $('#visualization').hover(function() {
      $('.visualization-desc').css('display', 'inline-block');
      $('#retention').css('background-color', '#b4cddf');
      $('#logs').css('background-color', '#b4cddf');
      $('#edr').css('background-color', '#b4cddf');
    }, function() {
      $('.visualization-desc').css('display', '');
      $('#retention').css('background-color', '');
      $('#logs').css('background-color', '');
      $('#edr').css('background-color', '');
    });
  });
  $(function() {
    $('#replay').hover(function() {
      $('.replay-desc').css('display', 'inline-block');
      $('#retention').css('background-color', '#b4cddf');
      $('#logs').css('background-color', '#b4cddf');
      $('#edr').css('background-color', '#b4cddf');
    }, function() {
      $('.replay-desc').css('display', '');
      $('#retention').css('background-color', '');
      $('#logs').css('background-color', '');
    });
  });
  $(function() {
    $('#retention').hover(function() {
      $('.retention-desc').css('display', 'inline-block');
      $('#edr').css('background-color', '#b4cddf');
    }, function() {
      $('.retention-desc').css('display', '');
      $('#edr').css('background-color', '');
    });
  });
  $(function() {
    $('#drrules').hover(function() {
      $('.drrules-desc').css('display', 'inline-block');
      $('#edr').css('background-color', '#b4cddf');
    }, function() {
      $('.retention-desc').css('display', '');
      $('#edr').css('background-color', '');
    });
  });
  $(function() {
    $('#forwarding').hover(function() {
      $('.forwarding-desc').css('display', 'inline-block');
      $('#edr').css('background-color', '#b4cddf');
    }, function() {
      $('.forwarding-desc').css('display', '');
      $('#edr').css('background-color', '');
    });
  });    