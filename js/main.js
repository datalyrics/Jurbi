require.config({
    paths: {
        "Namespace" : "external_libs/Namespace",
        "jquery"    : "external_libs/jquery-1.8.1.min",
        "underscore": "external_libs/underscore-min",
        "backbone"  : "external_libs/backbone-min"
    },
    shim: {
        'YourFramework': {
            deps: ['backbone', 'jquery', 'Namespace']
        },
        'backbone': {
            deps: ['jquery', 'underscore']
        },
        'DemoApp': {
            deps: ['YourFramework']
        }
    }
});

require(["DemoApp"],
    function() {
        console.log('all libraries have been loaded.');
    }
);
