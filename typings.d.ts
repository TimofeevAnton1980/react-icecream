declare module '*.module.css' {
    const exports: { [exportName: string]: string };
    export = exports;
}
declare module '*.svg' {
    const content: any;
    export default content;
}
declare module '*.png' {
    const value: any;
    export default value;
}
type GatsbyPageProps<D, P> = import('gatsby').PageProps<D, P>;
type HistoryLocation<S> = import('history').Location<S>; // don't forget the generic!

interface PageProps<D = object, P = object, S = object>
    extends GatsbyPageProps<D, P> {
    location: Window['location'] & HistoryLocation<S>;
}
