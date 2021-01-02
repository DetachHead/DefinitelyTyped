declare module 'assert' {
    function assert(value: any, message?: string | Error): asserts value;
    namespace assert {
        class AssertionError implements Error {
            name: string;
            message: string;
            actual: any;
            expected: any;
            operator: string;
            generatedMessage: boolean;
            code: 'ERR_ASSERTION';

            constructor(options?: {
                message?: string;
                actual?: any;
                expected?: any;
                operator?: string;
                // tslint:disable-next-line:ban-types
                stackStartFn?: Function;
            });
        }

        type AssertPredicate = RegExp | (new () => object) | ((thrown: any) => boolean) | object | Error;

        function fail(message?: string | Error): never;
        /** @deprecated since v10.0.0 - use fail([message]) or other assert functions instead. */
        function fail(
            actual: any,
            expected: any,
            message?: string | Error,
            operator?: string,
            // tslint:disable-next-line:ban-types
            stackStartFn?: Function,
        ): never;
        function ok(value: any, message?: string | Error): asserts value;
        /** @deprecated since v9.9.0 - use strictEqual() instead. */
        function equal(actual: any, expected: any, message?: string | Error): void;
        /** @deprecated since v9.9.0 - use notStrictEqual() instead. */
        function notEqual(actual: any, expected: any, message?: string | Error): void;
        /** @deprecated since v9.9.0 - use deepStrictEqual() instead. */
        function deepEqual(actual: any, expected: any, message?: string | Error): void;
        /** @deprecated since v9.9.0 - use notDeepStrictEqual() instead. */
        function notDeepEqual(actual: any, expected: any, message?: string | Error): void;
        function strictEqual<T>(actual: T, expected: T, message?: string | Error): void;
        function notStrictEqual<T>(actual: T, expected: T, message?: string | Error): void;
        function deepStrictEqual<T>(actual: T, expected: T, message?: string | Error): void;
        function notDeepStrictEqual<T>(actual: T, expected: T, message?: string | Error): void;

        function throws(block: () => any, message?: string | Error): void;
        function throws(block: () => any, error: AssertPredicate, message?: string | Error): void;
        function doesNotThrow(block: () => any, message?: string | Error): void;
        function doesNotThrow(block: () => any, error: AssertPredicate, message?: string | Error): void;

        function ifError(value: any): asserts value is null | undefined;

        function rejects(block: (() => Promise<any>) | Promise<any>, message?: string | Error): Promise<void>;
        function rejects(
            block: (() => Promise<any>) | Promise<any>,
            error: AssertPredicate,
            message?: string | Error,
        ): Promise<void>;
        function doesNotReject(block: (() => Promise<any>) | Promise<any>, message?: string | Error): Promise<void>;
        function doesNotReject(
            block: (() => Promise<any>) | Promise<any>,
            error: AssertPredicate,
            message?: string | Error,
        ): Promise<void>;

        const strict: Omit<
            typeof assert,
            | 'equal'
            | 'notEqual'
            | 'deepEqual'
            | 'notDeepEqual'
            | 'ok'
            | 'strictEqual'
            | 'deepStrictEqual'
            | 'ifError'
            | 'strict'
        > & {
            (value: any, message?: string | Error): asserts value;
            equal: typeof strictEqual;
            notEqual: typeof notStrictEqual;
            deepEqual: typeof deepStrictEqual;
            notDeepEqual: typeof notDeepStrictEqual;

            // Mapped types and assertion functions are incompatible?
            // TS2775: Assertions require every name in the call target
            // to be declared with an explicit type annotation.
            ok: typeof ok;
            strictEqual: typeof strictEqual;
            deepStrictEqual: typeof deepStrictEqual;
            ifError: typeof ifError;
            strict: typeof strict;
        };
    }

    export = assert;
}
