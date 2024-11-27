export type ReqData<
    Body = Record<string, any>,
    Params = Record<string, any>,
    Query = Record<string, any>,
    Headers = Record<string, any>,
> = {
    body: Body;
    params: Params;
    query: Query;
    headers: Headers;
};

export type Func<Type, rType = any> = (args: Type) => rType;
