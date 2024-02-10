export function CustomButton(props) {
    return (
        <div className="">
        <button className="bg-sky-500 hover:bg-sky-600 text-white  px-4 py-2" onClick={props.onClick}>{props.buttonText}</button>
        </div>
    )
}