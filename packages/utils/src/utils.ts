import { ClassValue, clsx } from "clsx"
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

export const p = <T> (p: Promise<T>): Promise<[null, T] | [Error | ErrorHandler]> => p.then(result => [null, result] as [null, T]).catch(error => [error])

export const cn = (...classes: ClassValue[]) => twMerge(clsx(classes))