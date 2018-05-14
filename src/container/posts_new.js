import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import {Field, reduxForm} from 'redux-form';

class PostsNew extends Component {
    render = () => {
        return (
            <div>
                <form>
                    <Field
                        label={"Title"}
                        name={"title"}
                        component={this.renderField}
                    />
                    <Field
                        label={"Categories"}
                        name={"tag"}
                        component={this.renderField}
                    />
                    <Field
                        label={"Post Content"}
                        name={"content"}
                        component={this.renderField}
                    />
                </form>
            </div>
        );
    }

    renderField = (field) => {
        return (
            <div className={"form-group"}>
                <label>{field.label}</label>
                <input
                    className={"form-control"}
                    type={"text"}
                    {...field.input}
                />
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = "Enter a title!";
    }
    if (!values.categories) {
        errors.categories = "Enter some categories";
    }
    if (!values.content) {
        errors.content = "Enter some content please"
    }
    //IF errors is empty, then form is fine to submit
    //else it has problem, redux form assumes form is invalid
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(PostsNew);