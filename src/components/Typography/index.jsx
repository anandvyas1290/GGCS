export * from "./Animation";

export const H4 = ({ children, className }) => {
    return <h5 className={`text-2xl font-bold ${className}`}>{children}</h5>;
};
export const H5 = ({ children, className }) => {
    return <h5 className={`text-xl font-semibold ${className}`}>{children}</h5>;
};
export const H6 = ({ children, className }) => {
    return <h6 className={`text-lg font-semibold ${className}`}>{children}</h6>;
};
