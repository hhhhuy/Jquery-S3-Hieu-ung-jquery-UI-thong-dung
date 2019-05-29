<!--draggable-->
$(function () {
    $("#draggable").draggable();
});
<!--droppable-->
$(function () {
    $("#draggable1").draggable();
    $("#droppable").droppable({
        drop: function (event, ui) {
            $(this)
                .addClass("ui-state-highlight")
                .find("p")
                .html("Dropped!");
        }
    });
});
<!--  resizable  -->
$(function () {
    $("#resizable").resizable();
});
<!--    Selectable-->
$(function () {
    $("#selectable").selectable();
});
<!--    sortable-->
$(function () {
    $("#sortable").sortable();
    $("#sortable").disableSelection();
});
//accordion
$(function () {
    $("#accordion").accordion();
});
//autocomplete
$(function () {
    var availableTags = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
    ];
    $("#tags").autocomplete({
        source: availableTags
    });
});
//datepicker
$(function () {
    $("#datepicker").datepicker();
});
