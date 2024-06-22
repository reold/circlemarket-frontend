import { writable, get } from "svelte/store"


interface AppInfo {
    accessToken: string | undefined,
    page: string,
    previousPage: string,
    guest: boolean,
    requesting: boolean,
}

export const appState = writable({ accessToken: undefined, page: "home", previousPage: "home", guest: true, requesting: false } as AppInfo)
export const useApp = {
    start: async () => {
        const accessToken = localStorage.getItem("access-token")
        if (accessToken) {
            useApp.load(accessToken)
        }
    },
    load: async (accessToken: string) => {
        let appstate = get(appState)
        appstate.accessToken = accessToken
        localStorage.setItem("access-token", accessToken)
        appstate.guest = false
        appState.set(appstate)
    },
    changePage: (newPage: string) => {
        let appstate = get(appState)
        appstate.previousPage = appstate.page
        appstate.page = newPage;
        appState.set(appstate)
    },
    startRequesting: () => {
        let appstate = get(appState)
        appstate.requesting = true;
        appState.set(appstate)

        return () => {
            let appstate = get(appState)
            appstate.requesting = false;
            appState.set(appstate)
        }
    }
}