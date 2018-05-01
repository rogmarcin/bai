/* global ApiClient */

MedicamentView = {
    renderSearch: function(medicaments) {
        var list = $('<ul>', {
            "data-role": "listview",
            "data-filter": true,
            "data-filter-placeholder": "Filtruj",
            "data-inset": true,
            "data-theme": "b"
        });
        $.each(medicaments, function(idx, element) {
            console.log(idx, element);
            var link = $('<a>', {
                text: element.label,
                "data-id": element.id,
                href: "#",
                onclick: `MedicamentController.leaflet($(this).data('id'))`
            });

            var listElem = $('<li>').append(link);
            list.append(listElem);
        });
        
        var panelId = "#add_medicines .link-results";
        $(panelId).html(list);
        $(panelId + " ul").listview();
    },
    
    renderLeaflet(result) {
        var panelId = "#add_medicines .search-results";
        var leaflet = $('<div>', {
            style: "overflow-y: auto"
        });
        $.each(result, function(idx, element) {
            var header = $('<h3>', {
                text: element.header
            });
            leaflet.append(header);
            
            var content = $('<div>', {
                text: element.content
            });
            
            leaflet.append(content);
        });
        
        $(panelId).find('.ui-panel-inner').html(leaflet);
        $(panelId).trigger( "updatelayout" );
        $(panelId).trigger( "create" );
        $(panelId).panel( "open" );
    },
    
    renderAddSuccessDialog() {
        $("#add_medicines .success-dialog").popup().popup("open");
    }
    
};