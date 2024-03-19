import { FieldMiddleware, MiddlewareContext, NextFn } from "@nestjs/graphql";


// Middleware -> meant to be lightweight, shouldn't perform heavy ops like retrieving data from a db
// Can't inject depencencies or access nest's depencency injector
export const loggerMiddleware: FieldMiddleware = async (
    ctx: MiddlewareContext,
    next: NextFn,
) => {
    const value: string = await next();
    console.log(value);
    return value
    //return value?.toLocaleLowerCase(); // Could do something like if was not using a enum -> This would return it as all lowerCase
}