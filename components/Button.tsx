import Image from 'next/image';

type ButtonProps = {
    type : 'button' | 'submit';
    title : string;
    icon? : string;
    variant : string;
    full? : boolean;
    onClick?: () => void;
    }

const Button = ({type, title, icon, variant, full, onClick}: ButtonProps) => {
  return (
    <button className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}`} onClick={onClick}>
        {icon && <Image src={icon} alt={title} width={24} height={24} />}
        <label className=' whitespace-nowrap cursor-pointer'>{title}</label>
    </button>
  )
}

export default Button