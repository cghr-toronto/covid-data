// (initDataTables) Add datatable classes
function initDataTable(target, options) {
    $(target).each(function(i) {
        $(this).DataTable(options);
    });
};