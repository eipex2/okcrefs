import React, { Component } from 'react'

import "./form.css"
import Control from '../Control'
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';



export default class Form extends Component {

    state = { questions: {}, isSubmitting: false }

    constructor(props) {
        super(props)

        const { questions: qs } = this.props

        //initilize form state
        Object.keys(qs).forEach(
            q => this.state.questions[q] = qs[q]
        )

    }

    validate = () => {
        const { questions: qs } = this.state
        return Object.keys(qs).filter(q => qs[q].v == "")
    }

    onChange = e => {

        //get all questions from the state
        const { questions: qs } = this.state

        //get question and its value from target
        const { name: q, value: v } = e.target

        //set the value of the question
        this.setState({
            questions: { ...qs, [q]: { ...qs[q], v } }
        })

    }

    submit = e => {

        e.preventDefault();
        this.setState({ isSubmitting: true })
        //validate fields and call completion if valid
        if (this.validate().length === 0) {
            console.log('success')
            //this.setState({isSubmitting:false})
            this.props.completion()
        } else {
            //this.setState({isSubmitting:false})
            console.log('an error')
        }

    }

    render() {

        const { questions: qs, isSubmitting, submitBtn } = this.state

        const fade = isSubmitting ? { opacity: 0.2 } : {}

        return (
            <div style={{ display: 'grid', position: 'relative' }}>
                {isSubmitting && <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', height: '100%', width: '100%', zIndex: 5, opacity: 0.8 }} >
                    <CircularProgress />
                </div>}
                <div style={fade}>
                    <form className="Form" onSubmit={this.submit}>
                        {
                            Object.keys(qs).map(q =>
                                <Control key={q} name={q} value={qs[q].v} type={qs[q].t} onChange={this.onChange} />
                            )
                        }
                        {
                            submitBtn && <Button
                                            fullWidth
                                            type="submit"
                                            variant="raised"
                                            color="primary">
                                            Submit
                                        </Button>
                        }

                    </form>
                </div>
            </div>
        )
    }
}