sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"fluidra/mm/consignmentsettle/test/integration/pages/SettleConsignmentPOList",
	"fluidra/mm/consignmentsettle/test/integration/pages/SettleConsignmentPOObjectPage"
], function (JourneyRunner, SettleConsignmentPOList, SettleConsignmentPOObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('fluidra/mm/consignmentsettle') + '/test/flp.html#app-preview',
        pages: {
			onTheSettleConsignmentPOList: SettleConsignmentPOList,
			onTheSettleConsignmentPOObjectPage: SettleConsignmentPOObjectPage
        },
        async: true
    });

    return runner;
});

