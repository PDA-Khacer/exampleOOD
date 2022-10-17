export interface IComponent<T> {
    /**
     * Build component
     * @param arg array parameter of component
     */
    build(...arg: any[]): T;

    /**
     * Log detail component
     */
    detail(): void;
}
