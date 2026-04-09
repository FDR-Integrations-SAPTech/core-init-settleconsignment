sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'fluidra.mm.consignmentsettle',
            componentId: 'SettleConsignmentPOList',
            contextPath: '/SettleConsignmentPO'
        },
        CustomPageDefinitions
    );
});