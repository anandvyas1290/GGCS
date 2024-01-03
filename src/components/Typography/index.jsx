export * from "./Animation";
export const H2 = ({ children, className }) => {
    return <h2 className={`text-4xl font-bold ${className}`}>{children}</h2>;
};
export const H3 = ({ children, className }) => {
    return <h3 className={`text-3xl font-bold ${className}`}>{children}</h3>;
};
export const H4 = ({ children, className }) => {
    return <h4 className={`text-2xl font-bold ${className}`}>{children}</h4>;
};
export const H5 = ({ children, className }) => {
    return <h5 className={`text-xl font-semibold ${className}`}>{children}</h5>;
};
export const H6 = ({ children, className }) => {
    return <h6 className={`text-lg font-semibold ${className}`}>{children}</h6>;
};
