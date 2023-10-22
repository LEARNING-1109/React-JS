
import React from 'react'
import ProtoType from 'prop-types'

class NameComp extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>NameComp : <p className='text-teal-600 font-bold text-2xl' > { this.props.name }</p> </div>
        )
    }
}

NameComp.defaultProps = {
    name: "No Name Added yet"
}

NameComp.propTypes = {
    // name: ProtoType.string,
    name: ProtoType.string.isRequired,
}

export default NameComp
