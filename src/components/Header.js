import PropTypes from 'prop-types'
import {useLocation} from 'react-router-dom'
import Button from './Button'

const Header = ({title, onAdd, showAddTask}) => {
    const location = useLocation()
    return (
        <header className="d-flex justify-content-between align-items-center">
            <h1>{title}</h1>
            {location.pathname === "/" && (
                <Button text={showAddTask ? 'Close' : 'Add'} color="btn-primary" onClick={onAdd} />
            )}
            
        </header>
    )
}

Header.defaultProps = {
    title: 'Hello'
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header