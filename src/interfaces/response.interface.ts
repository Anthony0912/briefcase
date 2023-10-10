export default interface Response <T> {
    statusCode: number;
    response:       T;
}