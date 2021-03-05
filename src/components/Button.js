const Button = ({text, color, onClick}) => {
    return <button className={`btn ${color}`} onClick={onClick}>{text}</button>
}


Button.defaultProps = {
    color: 'btn-primary'
}

export default Button
