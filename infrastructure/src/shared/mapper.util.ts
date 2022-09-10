export interface IMapper<I, O> {
    mapFrom(param: I): O
    mapTo(param: O): I
}
