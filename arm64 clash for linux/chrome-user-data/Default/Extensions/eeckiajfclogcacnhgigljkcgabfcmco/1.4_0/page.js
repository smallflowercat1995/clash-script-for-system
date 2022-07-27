$(document).ready(function(){

    var requests = [];
    var running_requests = [];

    var visibles = {unchecked: true, success: true, timeout: true, error: true};

    chrome.bookmarks.getTree(function(tree) {
    //------------------------------------------------------------------------------

        tree.forEach(function(node) {

            processNode(node, 0);
        });

        $('.icon').click(function(evt) {

            if ($(this).hasClass('status'))
            {
                var $node = $(this).parent();

                if ($node.hasClass('running'))
                {
                    running_requests.forEach(function(request, index) {

                        if (request.id == $node.attr('id'))
                        {
                            running_requests.splice(index, 1);
                            request.abort();
                            $node.removeClass('running');
                            setImage($(this), $node.data('status'));
                        }
                    });
                }
                else
                {
                    requests.push($node.attr('id'));
                    requestURL(requests.shift());
                }
            }

            if ($(this).hasClass('viewhide'))
            {
                var v = !visibles[$(this).attr('title')];
                $('.node.link.' + $(this).attr('title')).css('display', v ? 'block' : 'none');
                $(this).css('opacity', v ? '1' : '0.4');
                visibles[$(this).attr('title')] = v;
            }

            if ($(this).hasClass('action delete'))
            {
                chrome.bookmarks.remove($(this).parent().attr('id'));
                $(this).parent().remove();
            }

            if ($(this).hasClass('deleteall'))
                $('.node.link.' + $(this).attr('title')).each(function( index ) {
                    chrome.bookmarks.remove($(this).attr('id'));
                    $(this).remove();
                });

            if ($(this).hasClass('checkall'))
            {
                if ($(this).hasClass('running'))
                {
                    while (running_requests.length > 0)
                    {
                        request = running_requests.shift();
                        request.abort();
                    }
                    requests = [];

                    setImage($(this), $(this).attr('title'));
                    $(this).removeClass('running');
                }
                else
                {
                    if ($('.checkall.running').length > 0)
                        return;

                    requests = [];

                    status = $(this).attr('title');
                    $('.node.link').each(function( index ) {
                        if ($(this).data('status') == status)
                            requests.push($(this).attr('id'));
                    });   

                    if (requests.length > 0)
                    {
                        $(this).addClass('running');
                        setImage($(this), 'puff');
                        
                        for (var i=0; i<5; i++)
                            if (requests.length > 0)
                                requestURL(requests.shift());
                    }
                }
            }
        }); 

        $('#button_tree').click(function(evt) {

            $('#manual').hide();
            $('#duplicates').hide();

            $('#button_tree').hide();

            $('#button_help').show();
            $('#button_duplicates').show();

            $('#tree').show();
            $('#controls').show();
        });

        $('#button_help').click(function(evt) {

            $('#tree').hide();
            $('#controls').hide();
            $('#duplicates').hide();

            $('#button_help').hide();
            $('#button_duplicates').hide();

            $('#manual').show();
            $('#button_tree').show();
        });
            
        $('#button_duplicates').click(function(evt) {

            $('#tree').hide();
            $('#controls').hide();
            $('#manual').hide();
            
            $('#button_help').hide();
            $('#button_duplicates').hide();

            $('#duplicates').show();
            $('#button_tree').show();

            function getTree(pid) {

                var tree = [pid];
                while (pid != '0')
                {
                    var item = $('#'+pid);
                    pid = item.data('parentId');
                    if (pid != '0') tree.push(pid);
                }
                return tree.reverse();
            }

            function getHTMLTree(itemid) {

                var html = '<div class="duplicate">';
                getTree(itemid).forEach(function( id ) {
                    var $clone = $('#' + id).clone(true).prop('id', 'clone_' + id );
                    setImage($clone.find('.status'), 'space');
                    $clone.find('.status').removeClass('status');
                    // $clone.find('.status').remove();
                    setImage($clone.find('.action'), 'delete');
                    $clone.find('.action').addClass('clone');
                    $clone.find('.action').addClass('delete');
                    var t = $clone[0].outerHTML;
                    html = html + t;
                });
                html += '</div>';
                return html;     
            }

            $('#duplicates').empty();

            $('#duplicates').append('<div id="duplicates_title">DUPLICATES</div>');

            var dups = [];

            var addhtml = '';

            $('.node.link').each(function( indexA ) {

                var itemA = $(this);

                var html = '';

                $('.node.link').each(function( indexB ) {

                    var itemB = $(this);

                    if (itemA.data('url') == itemB.data('url') 
                    && indexB > indexA
                    && dups.indexOf(itemA.attr('id')) == -1)
                    {
                        if (html == '')
                        {
                            html = '<div class="duplicate_set">';
                            html += '<div class="duplicated_url">' + itemA.data('url') + '</div>';
                            html += getHTMLTree(itemA.attr('id'));
                        }

                        html += getHTMLTree(itemB.attr('id'));
                        dups.push(itemB.attr('id'));
                    }
                }); 

                html += '</div>';
                addhtml += html;
            }); 
            
            $('#duplicates').append(addhtml);

            $('.clone').click(function(evt) {
                if ($(this).parent().parent().parent().children().length == 3)
                {
                    setImage($(this).parent().parent().parent().find('.clone'), 'space');
                    $(this).parent().parent().parent().find('.clone').removeClass('delete');
                    $(this).parent().parent().parent().find('.clone').off('click');
                }
                var id = $(this).parent().attr('id').substr(6);
                $('#' + id).remove();
                chrome.bookmarks.remove(id)
                $(this).parent().parent().remove();
            });
        });

        $('#timeout_range').on('input change', function() {
            $('#timeout_value').html( $(this).val() + ' s.' );
        });

        $('#wrapper').css('visibility', 'visible');
        $('#wrapper').css('opacity', '1');

        $('#heart').parent().attr('href', 'https://chrome.google.com/webstore/detail/' + chrome.runtime.id + '/reviews');

        function anim() {

            $( "#paypal" ).animate({
                opacity: 0.15
            }, 3000, function() {
                $( "#paypal" ).animate({
                    opacity: 0.5
                }, 3000, function() {
                    anim();
                });
            });          
        }

        anim();

        function anim2() {

            $( "#heart" ).animate({
                opacity: 0.5
            }, 3000, function() {
                $( "#heart" ).animate({
                    opacity: 0.15
                }, 3000, function() {
                    anim2();
                });
            });
        }

        anim2();        
    });


    function requestURL(id) {
    //------------------------------------------------------------------------------

        $('#' + id).removeClass($('#' + id).data('status'));
        $('#' + id).addClass('running');
        setImage($('#' + id + ' > img.icon.status'), 'puff');

        setImage($('#' + id + ' > img.icon.action'), 'space');
        $('#' + id + ' > img.icon.action').removeClass('delete');

        xhr = $.ajax(
        {
            url: $('#' + id).data('url'),
            headers: {'Access-Control-Allow-Origin' : '*'},
            timeout: $('#timeout_range').val() * 1000
        }).complete( function (jqXHR, status) {

            $('#' + id).removeClass('running');

            if (status == 'abort' || status == 'canceled')
            {
                $('#' + id).addClass($('#' + id).data('status'));
                setImage($('#' + id + ' > img.icon.status'), $('#' + id).data('status'));
                return;
            }

            $('#' + id).addClass(status);
            $('#' + id).data('status', status);
            setImage($('#' + id + ' > img.icon.status'), status);

            if (status == 'error' || status == 'timeout')
            {
                setImage($('#' + id + ' > img.icon.action'), 'delete');
                $('#' + id + ' > img.icon.action').addClass('delete');
            }

            if (requests.length > 0)
                requestURL(requests.shift());
            else
            {
                $icon = $('.checkall.running');
                $icon.removeClass('running');
                setImage($icon, $icon.attr('title'));
            }
        });

        if (xhr.statusText != 'canceled')
        {
            xhr.id = id;
            running_requests.push(xhr);
        }
    }


    function setImage(item, name) {
    //------------------------------------------------------------------------------

        item.attr('src', 'images/' + name + (name == 'puff' ? '.svg' : '.png'));
    }


    var count_nodes = 0;

    function processNode(node, level) {
    //------------------------------------------------------------------------------

   // count_nodes++;
   //  if (count_nodes > 25)
   //      return;

        var is_url = node.url && node.url.substring(0,4) == 'http' ? true : false;

        if (node.children)
            favicon = 'images/folder.png';
        else if (is_url)            
            // favicon = 'https://www.google.com/s2/favicons?domain=' + domain_from_url(node.url);
            favicon = 'images/bookmark.png';

        else
            favicon = 'images/file.png';
    
        html =  '<div class="node" id="' + node.id + '">' +
                    '<img class="icon' + (is_url ? ' status' : '') + '" src="images/' + (is_url ? 'unchecked' : 'space') + '.png"' + (is_url ? ' title="unchecked"' : '') + '/>' +
                    '<img class="icon ' + (is_url ? 'action' : '') + '" src="images/space.png"/>' + 
                    '<div class="spacer" style="width: ' + (level * 25) +'px;">&nbsp;</div>' +
                    '<img class="icon' + (node.children ? ' folder' : '') + '" src="' + favicon + '"/>' +
                    '<div class="text">' + (is_url ? '<a target="_blank" href="' + node.url + '">' : '') + (node.title.length > 80 ? node.title.substring(0, 80) + '...' : node.title) + (is_url ? '</a>' : '') + '</div>' +
                '</div>';

        if (level != 0)
        {
            $('#tree').append(html);
            $('#' + node.id).data('parentId', node.parentId);
            $('#' + node.id).data('title', node.title);

            if (is_url) {
                $('#' + node.id).data('url', node.url);
                $('#' + node.id).data('status', 'unchecked');
                $('#' + node.id).addClass('link');
                $('#' + node.id).addClass('unchecked');
            }
            else {
                $('#' + node.id).addClass(favicon == 'images/file.png' ? 'file' : 'folder');
            }
        }

        if(node.children)
            node.children.forEach(function(child) {
                processNode(child, level + 1 ); 
            });
    }

    function domain_from_url(url) {
    //------------------------------------------------------------------------------

        var result;
        var match;
        if (match = url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n\?\=]+)/im)) {
            result = match[1]
            if (match = result.match(/^[^\.]+\.(.+\..+)$/)) {
                result = match[1]
            }
        }
        return result
    }

});