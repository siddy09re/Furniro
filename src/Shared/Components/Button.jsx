
import { twMerge } from 'tailwind-merge';

const Button = ({ content, variant, size, className, onClick }) => {
    const variants = {
      customBrown: 'bg-custom-brown text-white',
      primary: 'bg-blue-500 text-white hover:bg-blue-700',
      secondary: 'bg-gray-500 text-white hover:bg-gray-700',
      outlined : "text-custom-brown bg-white border-2 border-custom-brown hover:bg-custom-brown hover:text-white"
    };

    const sizes = {
      small: 'px-4 py-2 text-sm',
      medium: 'px-8 py-2 text-md',
      large: 'px-12 py-4 text-lg ',
      extralarge: 'md:px-20 md:py-8 sm:px-12 sm:py-4 px-8 py-2 text-lg',
    };

    return (
      <button
        className={twMerge("whitespace-nowrap w-full h-full "  , variants[variant], sizes[size] , className)}
        onClick={onClick}
        >
        {content}
      </button>
    );
};

export default Button;
