import React, {useState, useEffect} from 'react'
import validate from '../../utils/validationRules'
import './form.css'

const Form = () => {
    const [values, setValues] = useState({})
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            renderSuccessMessage()
        }
      }, [errors, isSubmitting])

    const handleSubmit = e => {
        if (e) e.preventDefault()

        setErrors(validate(values))
        setIsSubmitting(true)
    }

    const handleValueChange = e => {
        e.persist()

        setValues(values => ({ ...values, [e.target.name]: e.target.value }));
    }

    const renderSuccessMessage = () => alert('Form has been submitted successfully')

    return (
        <div className="wrapper">
            <div className="title">
                <h3>Form</h3>
            </div>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <input
                            className={`${errors.name && 'notValid'}`}
                            type="name"
                            name="name"
                            onChange={handleValueChange}
                            value={values.name || ''}
                        />
                        {errors.name && (
                            <span className="dangerMessage">
                                {errors.name}
                            </span>
                        )}
                    </div>
                    <div className="field">
                        <input 
                            className={`${errors.password && 'notValid'}`}
                            type="password" 
                            name="password"
                            onChange={handleValueChange}
                            value={values.password || ''}
                        />
                        {errors.password && (
                            <span className="dangerMessage">
                                {errors.password}
                            </span>
                        )}
                    </div>
                    <div className="field">
                        <input
                            className={`${errors.email && 'notValid'}`}
                            type="email"
                            name="email"
                            onChange={handleValueChange}
                            value={values.email || ''}
                        />
                        {errors.email && (
                            <span className="dangerMessage">
                                {errors.email}
                            </span>
                        )}
                    </div>
                    <button type="submit" className="submitBtn">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Form