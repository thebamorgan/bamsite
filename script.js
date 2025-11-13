$(document).ready(function() {
    // Make all windows draggable by their title bar
    $(".window").draggable({
        handle: ".title-bar",
        containment: "#desktop" // Constrain dragging to the desktop area
    });

    // --- Window Opening Logic ---

    // Open Resume window
    $("#resume-icon").on('dblclick', function() {
        $("#resume-window").show();
    });

    // Open About Me window
    $("#aboutme-icon").on('dblclick', function() {
        $("#aboutme-window").show();
    });

    // Open Contact window
    $("#contact-icon").on('dblclick', function() {
        $("#contact-window").show();
    });


    // --- Window Closing Logic ---
    $(".close-button").on('click', function() {
        // Find the parent .window element and hide it
        $(this).closest('.window').hide();
    });

    // --- Start Menu Logic (Optional but cool) ---
    $("#start-button").on('click', function(event) {
        event.stopPropagation(); // Prevents the desktop click from firing
        $("#start-menu").toggle();
    });
    $("#desktop").on('click', function() {
        $("#start-menu").hide();
    });
});