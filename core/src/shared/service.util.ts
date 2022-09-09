export interface IService<Repository, Presenter, Domain, Key extends keyof Domain> {
    readonly repository: Repository
    readonly presenter: Presenter
    execute(...args: any[])
}
