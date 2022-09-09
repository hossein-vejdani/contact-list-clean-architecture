export interface IService<Repository, Presenter, Domain, Key extends keyof Domain> {
    repository: Repository
    presenter: Presenter
    execute(...args: any[])
}
