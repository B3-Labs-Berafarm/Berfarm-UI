

const Input = ({ inputBlockClassName, inputClassName, icon, placeholder = '', label = '', }) => {
    return (
        <div className={`relative w-full max-w-md ${inputBlockClassName}`}>
            {
                label && (
                    <label htmlFor="input" className="block text-sm font-medium text-gray-700 mb-2 mx-2">
                        Search
                    </label>

                )
            }

            <div className="relative">
                <input
                    id="input"
                    type="text"
                    placeholder={placeholder}
                    className={`w-full py-2 pl-4 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-action-primary text-sm ${inputClassName}`}

                />
                {icon && icon}
            </div>
        </div>
    );
};

export default Input;
