import "../css/CustomComponentStyles.css"

export function CustomButton(props) {
    return (
        <div className="">
        <button id="buttonStyle" onClick={props.onClick}>{props.buttonText}</button>
        </div>
    )
}