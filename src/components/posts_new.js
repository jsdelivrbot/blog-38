import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class PostsNew extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input} // includes all the events to mutate state
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
        {/* touched is when the user focusIn and then focusOut */}
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title"
          name="title"
          component={this.renderField} />
        {/* Is no necessary to call this method with () in component property beucase it calls automatically */}
        <Field
          label="Categories"
          name="categories"
          component={this.renderField} />

        <Field
          label="Post content"
          name="content"
          component={this.renderField} />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  //values => { title: 'asd', categories: 'asasd', content: 'dasdsa' }
  const errors = {};

  // validate the input form 'values'
  if (!values.title) {
    errors.title = "Enter a title please";
  }
  if (!values.categories) {
    errors.categories = "Enter some categories please"
  }
  if (!values.content) {
    errors.content = "Enter some content please"
  }

  // if errors is empty, the form is fine to submit
  // if errors has any properties, redux form assumes for in invalid
  return errors;
}

// reduxForm is similar to connect
export default reduxForm({
  validate,
  form: 'PostsNewForm' // name of the form
})(PostsNew);
