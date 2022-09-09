export interface IService<Repository, Presenter> {
    readonly repository: Repository
    readonly presenter: Presenter
    execute(...args: any[]): void
}
