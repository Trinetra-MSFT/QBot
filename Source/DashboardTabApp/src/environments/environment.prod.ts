export const environment = {
    production: false,
    apiBaseUrl: "https://QBotBaseLocal.azurewebsites.net/api/Request/",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "d634c2da-9cba-459a-aad1-81df852f770f",
        clientId: "b2d68c7f-0a00-42db-bb69-a78ef256fcc8",
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
};
