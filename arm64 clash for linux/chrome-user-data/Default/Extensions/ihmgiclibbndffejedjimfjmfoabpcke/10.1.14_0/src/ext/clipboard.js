pl.extend(ke.ext.clipboard,{addTextfieldToBody:function(){return $("<textarea>").css({position:"absolute",top:-1e3,left:-1e3}).appendTo("body")},copyToClipboard:function(e){var o=ke.ext.clipboard.addTextfieldToBody();o.val(e).focus().select(),document.execCommand("Copy"),o.remove()},getClipboardContents:function(){var e=ke.ext.clipboard.addTextfieldToBody();e.val("").focus().select(),document.execCommand("Paste");var o=e.val();return e.remove(),o}});