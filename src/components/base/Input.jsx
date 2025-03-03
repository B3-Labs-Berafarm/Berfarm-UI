

const Input = ({ inputBlockClassName, inputClassName, icon, placeholder = '', label = '', labelClassName = ''
}) => {
    return (
        <div className={`relative w-full  ${inputBlockClassName}`}>
            {
                label && (
                    <label htmlFor="input" className={`block ${labelClassName}`}>
                        {label}
                    </label>
                )
            }

            <div className="relative">
                <input
                    id="input"
                    type="text"
                    placeholder={placeholder}
                    className={`w-full py-2 pl-4 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-action-primary ${inputClassName}`}

                />
                {icon && icon}
            </div>
        </div>
    );
};

export default Input;
