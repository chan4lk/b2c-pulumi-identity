import * as pulumi from "@pulumi/pulumi";
import * as azure_native from "@pulumi/azure-native";

const resourceGroup = new azure_native.resources.ResourceGroup("resourceGroup", {
    location: "eastus",
    resourceGroupName: "rg-b2c-roles-dev",
});

const b2cTenant = new azure_native.azureactivedirectory.B2CTenant("b2cTenant", {
    countryCode: "US",
    displayName: "b2c-identity-roles",
    location: "United States",
    resourceGroupName: resourceGroup.name,
    resourceName: "b2cdevapproles.onmicrosoft.com",
    sku: {
        name: azure_native.azureactivedirectory.B2CResourceSKUName.PremiumP1,
        tier: azure_native.azureactivedirectory.B2CResourceSKUTier.A0,
    },
});