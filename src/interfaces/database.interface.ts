export interface Database {
    connect(): Promise<string>;
}
