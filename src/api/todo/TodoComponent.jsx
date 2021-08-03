import { Field, Form, Formik } from 'formik'
import moment from 'moment'
import React, {Component} from 'react'

class TodoComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            id : this.props.match.params.id , 
            description : 'Learn form',
            targetDate : moment(new Date()).format('YYYY-MM-DD')
        }
    }
    render(){

        return ( <div> 
            <h1> TODO</h1>
            <div className = 'container'> 
            <Formik>
                {
                    (props) => (

                       <Form> 
                           <fieldset className=" form-group">
                               <label> Description</label>
                                  <Field className = "form-control" type="text" name="description"> 

                                  </Field>
                               
                           </fieldset>
                           <fieldset className=" form-group">
                               <label> Date</label>
                                  <Field className = "form-control" type = "date" name =" targetDate"> 

                                  </Field>
                               
                           </fieldset>
                           <buttom className = "btn btn-success" type = "submit"> Save 

                           </buttom>



                       </Form>

                    )

                
                }

            </Formik>
            </div>
            </div>
     )
        
    }
}

export default  TodoComponent