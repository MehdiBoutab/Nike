const Button = ({ label, iconURL, backgroundColor, textColor, borderColor }) => {
  const backgroundCOlor = backgroundColor ? backgroundColor : 'bg-coral-red';
  const textCOlor = textColor ? textColor : 'text-white';
  const borderCOlor = borderColor ? borderColor: 'border-coral-red';

  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none 
    ${backgroundCOlor} ${textCOlor} ${borderCOlor} rounded-full`}>
      {label}
      {iconURL && <img src={iconURL} alt="Arrow right icon" className="ml-2 rounded-full w-5 h-5" />}
    </button>
  )
}
export default Button