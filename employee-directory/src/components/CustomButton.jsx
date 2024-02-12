export function CustomButton({buttonType, onClick, buttonText}) {
    return (
        <div className="">
        <button type={buttonType} className="bg-sky-500 hover:bg-sky-600 text-white  px-4 py-2" onClick={onClick}>{buttonText}</button>
        </div>
    )
}