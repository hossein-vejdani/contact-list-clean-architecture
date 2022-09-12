export const importerAll = <T>(modules: __WebpackModuleApi.RequireContext): T => {
    return modules.keys().map(key => modules(key)) as T
}
