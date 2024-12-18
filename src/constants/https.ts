export enum HttpStatus {
    //SUCCESS Response 200 series
    OK = 200,
    CREATED = 201,
    NO_CONTENT = 204,
    PARTIAL_CONTENT = 206,

    //REDIRECT Messages 300 series
    MOVED_PERMANANTLY = 301,
    FOUND = 302,
    NOT_MODIFIED = 304,
    TEMP_REDIRECT = 307,

    //Client Error Response 400 series
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    CONFLICT = 409,
    TOO_MANY_REQUESTS = 429,

    //SERVER Error Response 500 series
    INTERNAL_SERVER_ERROR = 500,
    BAD_GATEWAY = 502,
    SERVICE_UNAVAILABLE = 503,
    GATEWAY_TIMEOUT = 504,
}

export enum HttpMethods {
    GET = "get",
    POST = "post",
    PUT = "put",
    DELETE = "delete",
}
