const host = process.env.HOST;

URL = {
    login: host+'index.jsp',
    home: host+'myzone/index.jsp',
    manageVehicles: host+'vehicle/manageVehicles/index.jsp',
    interchangeSearch: host+'interchangeSearch.jsp',
    account: host+'myzone/account/index.jsp',
    mobileApp: host+'myzone/mobile.jsp',
    feedback: host+'info/contact/index.jsp',
    training: host+'info/training.jsp',
    logout: '/logout',
    quotes: host+'order/saved/index.jsp',
    cart: host+'order/checkout/checkout.jsp',
    laborLookupByPart: host+'catalog/parts/index.jsp?lbrType=labor&id=cat10002',
    laborLookupByJob: host+'jobs/chooseJob.jsp?lbrType=labor',
    serviceIntervals: host+'estimator/adservicescontent/serviceIntervalSelection.jsp',
    vehicleSpecifications: host+'vehicle/specifications/index.jsp',
    componentLocations: host+'vehicle/componentLocations/index.jsp',
    deals: host+'deals/dealslanding/index.jsp',
    marketingTools: host+'landing/page.jsp',
    
    provantage: host+'provantage/autoRepairNetwork/overview.jsp',
    replacementParts: host+'catalog/parts/category.jsp',
    chemicalsAndFluids: host+'catalog/accessories/category.jsp?id=cat11263324',
    shopSupplies: host+'catalog/accessories/index.jsp',
    toolsAndEquipment: host+'catalog/accessories/category.jsp',
    performance: host+'catalog/accessories/category.jsp?',
    jobs: host+'jobs/chooseJob.jsp',

    contactUs: host+'info/contact/index.jsp',
    termsAndCondition: host+'info/terms/termsAndConditions.jsp',
    privacyPolicy: host+'info/terms/privacyPolicy.jsp',

    brands: host+'catalog/brands/index.jsp',
    pricing: host+'info/about/Parts-and-Pricing.jsp',
    electronidOrdering: host+'info/about/Electronic-Ordering.jsp',
    supportAndServices: host+'info/about/Support-and-Services.jsp',
    govermentAgencies: host+'info/governmentAgencies/governmentAgencies.jsp',
    aboutAlldata: host+'info/howToBuy.jsp',
    contactUs: host+'info/contact/index.jsp',
    termsAndCondition: host+'info/terms/termsAndConditions.jsp',
    warranties: host+'info/terms/warranties.jsp',
    security: host+'info/terms/warranties.jsp',
    privacyPolicy: host+'info/terms/privacyPolicy.jsp',
    californiaSupplyChain: host+'pdfs/california_human_trafficking_statement.pdf',

    catalog: host+'catalog/accessories/category.jsp',

    aboutAutoZone: 'https://www.autozone.com/company/',
    investors: 'https://investors.autozone.com/',
    careers: 'https://www.autozone.com/company/careers/',
    autoZoneCom: 'https://www.autozone.com/',
    alldata: 'http://www.alldata.com/',
    alldataRepair: 'http://www.alldatapro.com/includes/main.jsp',
    alldataDIY:'http://www.alldatadiy.com/',

    requestAccess: host+'myzone/requestAccess/existingCustomerRequest.jsp',
    newCustomerRequest: host+'myzone/requestAccess/newCustomerRequest.jsp',
    shopReferral: host+'info/about/shop-referral.jsp',
    toolEquipmentQuarterly: host+'info/about/toolEquipmentQuarterly.jsp',
    mareketigTools: host+'landing/page.jsp?type=m&name=grow-your-business',
    
    digiCert: 'https://seal.digicert.com/seals/popup/?tag=RUh-6SO9&url=www.autozonepro.com&lang=en&cbr=1546896332307',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.autozonepro.app',
    appleAppStore: 'https://itunes.apple.com/us/app/autozonepro-mobile/id1263634802?ls=1&mt=8',

    promozone: 'https://www.azpromozone.com/log-in.aspx?r=',

    pageNotFound: 'https://www.autozonepro.com/info/'
}

export default URL;


