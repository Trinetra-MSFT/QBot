export const environment = {
    production: false,
    apiBaseUrl: "https://QBotBaseLocal.azurewebsites.net/api/Request/",
    selfUrl: "https://QBotBaseLocal-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "d634c2da-9cba-459a-aad1-81df852f770f",
        clientId: "c717db7b-8445-4198-acec-aaa6fa5ff882",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
    gid: "",
    cname: ""
};
