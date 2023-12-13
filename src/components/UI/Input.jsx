export const Input = ({ type, placeholder, className }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={`w-full rounded-full !px-5 !py-2.5 !outline-none border-none bg-gray-100 ${className ?? ""}`}
        />

    );
};