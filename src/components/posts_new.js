import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
//reduxForm simmilar to connect helper

class PostsNew extends Component {
    renderField(field) {
        const { meta: { touched, error } } = field; //instead of field.meta.touched
        const className = `form-group ${touched && error ? 'has-danger' : ''}`

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    type="text"
                    className="form-control"
                    {...field.input} //wire up, onChange, onFocus, onBlur, ...
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        );      //field.meta.pristine, touched, invalid
    }

    onSubmit(values) {
        //this === component
        console.log(values);
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field  //does know how to interact with field, nothing visible
                    label="Title"
                    name="title" //reference errors.title, field.meta.error
                    component={this.renderField} //UI
                />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
                <Link to="/" className="btn btn-danger">
                    Cancel
                </Link>
            </form>
        );
    }
}

function validate(values) {
     const errors = {};

     //validate the inputsfrom values
    if (!values.title) errors.title = "Enetr a title!";
    if (!values.categories) errors.categories = "Enetr some categories!";
    if (!values.content) errors.content = "Enetr a content!";

    // if errors is empty, the form is fine to submit
    // if it has any props, the form is invalid
     return errors;
}

export default reduxForm({
    //config
    validate, //validate:validate and assings errors to Field name
    form: 'PostsNewForm' //unique string, different forms + same time - works correctly
})(PostsNew); //ability to communicate directly to the reducer