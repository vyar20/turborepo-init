import chalk from "chalk"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export class ErrorHandler extends Error {
    status: string
    statusCode: number

    constructor(status: string, statusCode: number) {
        super()
        this.status = status
        this.statusCode = statusCode
    }
}

export const p = <T>(p: Promise<T>): Promise<[null, T] | [Error | ErrorHandler]> =>
    p.then((result) => [null, result] as [null, T]).catch((error) => [error])

export const cn = (...classes: ClassValue[]) => twMerge(clsx(classes))

export enum HTTP_STATUS {
    OK = 200,
    CREATED = 201,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404
}

export enum HTTP_STATUS_TEXT {
    OK = "OK",
    CREATED = "CREATED",
    BAD_REQUEST = "BAD_REQUEST",
    UNAUTHORIZED = "UNAUTHORIZED",
    FORBIDDEN = "FORBIDDEN",
    NOT_FOUND = "NOT_FOUND"
}

export const getHTTPStatus = (statusText: keyof typeof HTTP_STATUS_TEXT) => {
    const [_, statusCode] = Object.entries(HTTP_STATUS).find(([key]) => key === statusText) || []
    return statusCode
}

export const log = {
    info: (message: unknown) => console.log(chalk.blue(`[INFO]: ${message}`)),
    error: (message: unknown) => console.log(chalk.red(`[ERROR]: ${message}`)),
    warn: (message: unknown) => console.log(chalk.yellow(`[WARN]: ${message}`))
}
