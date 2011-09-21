
/**
 * namespace bugmod
 */

if(typeof(bugmod) == 'undefined') {
    var bugmod = {};
}

(function() {

this.listMod = function() {
    var raw = $("td.bz_query_edit").html();
    // console.log(raw);
    $("li.form").after("<li>" +
                        '<span class="separator"> | <span>' +
                        raw +
                        "</li>"
    );
}

}).apply(bugmod);

bugmod.listMod();