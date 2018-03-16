import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class Signin extends Component {
    handleFormSubmit({ email, password }) {
        console.log(email, password);
    }

    renderField(name) {
        return (
            <fieldset className="form-group">
                <label>
                    {name.charAt(0).toUpperCase() + name.slice(1)}:
                </label>
                <Field
                    name={name}
                    component="input"
                    type="text"
                    className="form-control"
                />
            </fieldset>
        )
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                {this.renderField('email')}
                {this.renderField('password')}
                <button action="submit" className="btn btn-primary">
                    Sign in
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'signin'
})(Signin);