import Containts from "expo-constants";

const settings = {
    dev: {
        apiUrl: "http://192.168.0.113:9000/api",
    },
    staging: {
        apiUrl: "http://192.168.0.113:9000/api",
    },
    prod: {
        apiUrl: "http://192.168.0.113:9000/api",
    },
}

const getCurrentSettings = () => {
    if (__DEV__) return settings.dev;
    if (Containts.manifest.releaseChannel === 'staging') return settings.staging;
    return settings.prod;
}

export default getCurrentSettings();