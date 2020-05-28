// (ready) Initializes js code for the page
document.addEventListener('DOMContentLoaded', function() {
    initNavBar();
});

// (initNavBar) Add navigation bar interactions
function initNavBar () {

    // (initNavBar_toggle) Toggle when clicking menu button
    $('#menu').on('click', function () {
        $('.animated-icon').toggleClass('open');
    });

    // (initNavBar_close) Close when clicking out
    $('#content').click(function () {
        $('.animated-icon').removeClass('open');
        $('.navbar-collapse').collapse('hide');
    });
};

// (initDataTables) Add datatable classes
function initDataTable(target, options) {
    $(target).each(function(i) {
        $(this).DataTable(options);
    });
};